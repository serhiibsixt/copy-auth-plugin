# Chrome plugin to capture authorization

This Chrome extension captures the "Authorization" header from the last request made in the network and allows the user to copy it to the clipboard by clicking a button in the extension popup.

## Getting Started

### Prerequisites

- Google Chrome browser.

### Installation

1. Clone or download this repository to your local machine.
2. Open the Chrome browser.
3. Navigate to `chrome://extensions/`.
4. Enable "Developer mode" by clicking the toggle switch in the top right corner.
5. Click the "Load unpacked" button and select the extension directory (where you saved/cloned this repository).

## Usage

1. Make a web request that includes an "Authorization" header (e.g., by visiting a website that requires authentication).
2. Click the extension icon in the Chrome toolbar.
3. In the extension popup, click the `Copy Last Authorization Header` button.
4. The button text will change to `Copied!` and the "Authorization" header value from the last request will be copied to your clipboard.
5. The button background color will transition to green, indicating a successful copy action.
