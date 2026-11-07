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
        if sms.cells.firstMatch.exists, !sms.buttons["add"].exists { sms.cells.firstMatch.tap(); sleep(2) }
        if sms.keyboards.firstMatch.exists { sms.navigationBars.firstMatch.tap(); sleep(1) } // keyboard hides the drawer's lower rows
        sms.buttons["add"].firstMatch.tap()
        sleep(2)
        let coda = sms.cells.containing(.staticText, identifier: "Coda").firstMatch
        if !coda.waitForExistence(timeout: 3), sms.buttons["More"].exists { sms.buttons["More"].tap() }
        if !coda.waitForExistence(timeout: 3) { sms.cells["Photos"].firstMatch.swipeUp() }
        if !coda.exists { print("TREE3", sms.debugDescription) }
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
