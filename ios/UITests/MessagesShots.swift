import XCTest

/// Drives Messages to open Coda's iMessage app and saves real captures for the App Store
/// iMessage screenshot sets. Run: xcodebuild test -scheme Quotable -only-testing:CodaUITests
/// on an iPad Pro 13 and an iPhone Pro Max simulator; PNGs land in /tmp/coda-imessage/.
final class MessagesShots: XCTestCase {
    func testOpenCodaInMessages() throws {
        XCUIApplication().launch(); sleep(2) // registers the Messages extension on a fresh simulator
        let sms = XCUIApplication(bundleIdentifier: "com.apple.MobileSMS")
        sms.terminate()
        sms.launch()
        sleep(3)
        sms.cells.firstMatch.tap() // the simulator's seeded thread; run on a freshly erased simulator
        sleep(2)
        sms.buttons["add"].firstMatch.tap()
        let coda = sms.staticTexts["Coda"].firstMatch
        let photos = sms.staticTexts["Photos"].firstMatch
        sleep(2)
        // The + sheet opens on the photo grid; dragging it up reveals the list of iMessage apps.
        for _ in 0..<4 where !(coda.exists && coda.isHittable) {
            let start = sms.coordinate(withNormalizedOffset: CGVector(dx: 0.5, dy: photos.exists ? 0.6 : 0.8))
            start.press(forDuration: 0.1, thenDragTo: sms.coordinate(withNormalizedOffset: CGVector(dx: 0.5, dy: 0.2)))
            sleep(1)
        }
        if !coda.exists { print("TREE4", sms.debugDescription) }
        coda.tap()
        sleep(5)
        save("01-start")
        sms.buttons["Play five"].firstMatch.tap()
        sleep(4)
        save("02-play")
    }

    private func save(_ name: String) {
        let dir = URL(fileURLWithPath: "/tmp/coda-imessage")
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let device = UIDevice.current.userInterfaceIdiom == .pad ? "ipad" : "iphone"
        try? XCUIScreen.main.screenshot().pngRepresentation.write(to: dir.appendingPathComponent("\(device)-\(name).png"))
    }
}
