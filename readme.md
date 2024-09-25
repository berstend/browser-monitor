# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 129.0.6668.70 (`2024-9-24`) 
No browser API changes.

  
#### 129.0.6668.58 (`2024-9-17`) ⚡
Added 26 APIs, removed 2 (see: [diff](./browser_apis/chrome-stable_128.0.6613.137_to_129.0.6668.58.diff), [json](./browser_apis/chrome-stable_128.0.6613.137_to_129.0.6668.58.json), [full list](./browser_apis/chrome-stable_129.0.6668.58.json))
 ```diff
--- ./browser_apis/chrome-stable_128.0.6613.137.json	2024-09-18 01:07:56.661347677 +0000
+++ ./browser_apis/chrome-stable_129.0.6668.58.json	2024-09-18 01:08:28.801460624 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8491,
+  "browserApiCount": 8515,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -635,7 +635,9 @@
     "CSSPositionTryDescriptors.prototype.place-self",
     "CSSPositionTryDescriptors.prototype.placeSelf",
     "CSSPositionTryDescriptors.prototype.position-anchor",
+    "CSSPositionTryDescriptors.prototype.position-area",
     "CSSPositionTryDescriptors.prototype.positionAnchor",
+    "CSSPositionTryDescriptors.prototype.positionArea",
     "CSSPositionTryDescriptors.prototype.right",
     "CSSPositionTryDescriptors.prototype.top",
     "CSSPositionTryDescriptors.prototype.width",
@@ -1427,9 +1429,7 @@
     "Fence.prototype.setReportEventDataForAutomaticBeacons",
     "FencedFrameConfig",
     "FencedFrameConfig.prototype",
-    "FencedFrameConfig.prototype.height",
     "FencedFrameConfig.prototype.setSharedStorageContext",
-    "FencedFrameConfig.prototype.width",
     "File",
     "File.prototype",
     "File.prototype.arrayBuffer",
@@ -2967,6 +2967,12 @@
     "Intl.DisplayNames.prototype.of",
     "Intl.DisplayNames.prototype.resolvedOptions",
     "Intl.DisplayNames.supportedLocalesOf",
+    "Intl.DurationFormat",
+    "Intl.DurationFormat.prototype",
+    "Intl.DurationFormat.prototype.format",
+    "Intl.DurationFormat.prototype.formatToParts",
+    "Intl.DurationFormat.prototype.resolvedOptions",
+    "Intl.DurationFormat.supportedLocalesOf",
     "Intl.ListFormat",
     "Intl.ListFormat.prototype",
     "Intl.ListFormat.prototype.format",
@@ -3312,6 +3318,8 @@
     "MathMLElement.prototype.onresize",
     "MathMLElement.prototype.onscroll",
     "MathMLElement.prototype.onscrollend",
+    "MathMLElement.prototype.onscrollsnapchange",
+    "MathMLElement.prototype.onscrollsnapchanging",
     "MathMLElement.prototype.onsecuritypolicyviolation",
     "MathMLElement.prototype.onseeked",
     "MathMLElement.prototype.onseeking",
@@ -4217,6 +4225,8 @@
     "Option.prototype.constructor.prototype.onresize",
     "Option.prototype.constructor.prototype.onscroll",
     "Option.prototype.constructor.prototype.onscrollend",
+    "Option.prototype.constructor.prototype.onscrollsnapchange",
+    "Option.prototype.constructor.prototype.onscrollsnapchanging",
     "Option.prototype.constructor.prototype.onsearch",
     "Option.prototype.constructor.prototype.onsecuritypolicyviolation",
     "Option.prototype.constructor.prototype.onseeked",
@@ -4721,11 +4731,14 @@
     "PublicKeyCredential",
     "PublicKeyCredential.isConditionalMediationAvailable",
     "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable",
+    "PublicKeyCredential.parseCreationOptionsFromJSON",
+    "PublicKeyCredential.parseRequestOptionsFromJSON",
     "PublicKeyCredential.prototype",
     "PublicKeyCredential.prototype.authenticatorAttachment",
     "PublicKeyCredential.prototype.getClientExtensionResults",
     "PublicKeyCredential.prototype.rawId",
     "PublicKeyCredential.prototype.response",
+    "PublicKeyCredential.prototype.toJSON",
     "PushManager",
     "PushManager.prototype",
     "PushManager.prototype.getSubscription",
@@ -5875,6 +5888,8 @@
     "SVGViewElement.prototype.onresize",
     "SVGViewElement.prototype.onscroll",
     "SVGViewElement.prototype.onscrollend",
+    "SVGViewElement.prototype.onscrollsnapchange",
+    "SVGViewElement.prototype.onscrollsnapchanging",
     "SVGViewElement.prototype.onsecuritypolicyviolation",
     "SVGViewElement.prototype.onseeked",
     "SVGViewElement.prototype.onseeking",
@@ -5908,6 +5923,7 @@
     "Scheduler",
     "Scheduler.prototype",
     "Scheduler.prototype.postTask",
+    "Scheduler.prototype.yield",
     "Scheduling",
     "Scheduling.prototype",
     "Scheduling.prototype.isInputPending",
@@ -6125,6 +6141,10 @@
     "SharedWorker.prototype",
     "SharedWorker.prototype.onerror",
     "SharedWorker.prototype.port",
+    "SnapEvent",
+    "SnapEvent.prototype",
+    "SnapEvent.prototype.snapTargetBlock",
+    "SnapEvent.prototype.snapTargetInline",
     "SourceBuffer",
     "SourceBuffer.prototype",
     "SourceBuffer.prototype.abort",
@@ -7772,6 +7792,8 @@
     "XMLDocument.prototype.onresume",
     "XMLDocument.prototype.onscroll",
     "XMLDocument.prototype.onscrollend",
+    "XMLDocument.prototype.onscrollsnapchange",
+    "XMLDocument.prototype.onscrollsnapchanging",
     "XMLDocument.prototype.onsearch",
     "XMLDocument.prototype.onsecuritypolicyviolation",
     "XMLDocument.prototype.onseeked",
@@ -8286,6 +8308,8 @@
     "onresize",
     "onscroll",
     "onscrollend",
+    "onscrollsnapchange",
+    "onscrollsnapchanging",
     "onsearch",
     "onsecuritypolicyviolation",
     "onseeked",
```

  
#### 128.0.6613.137 (`2024-9-10`) 
No browser API changes.

  
#### 128.0.6613.119 (`2024-9-2`) 
No browser API changes.

  
#### 128.0.6613.113 (`2024-8-28`) 
No browser API changes.

  
#### 128.0.6613.84 (`2024-8-21`) ⚡
Added 27 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_127.0.6533.119_to_128.0.6613.84.diff), [json](./browser_apis/chrome-stable_127.0.6533.119_to_128.0.6613.84.json), [full list](./browser_apis/chrome-stable_128.0.6613.84.json))
 ```diff
--- ./browser_apis/chrome-stable_127.0.6533.119.json	2024-08-22 01:05:20.173066151 +0000
+++ ./browser_apis/chrome-stable_128.0.6613.84.json	2024-08-22 01:05:40.229126094 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8464,
+  "browserApiCount": 8491,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -194,6 +194,7 @@
     "AudioContext.prototype.createMediaStreamDestination",
     "AudioContext.prototype.createMediaStreamSource",
     "AudioContext.prototype.getOutputTimestamp",
+    "AudioContext.prototype.onerror",
     "AudioContext.prototype.onsinkchange",
     "AudioContext.prototype.outputLatency",
     "AudioContext.prototype.resume",
@@ -902,6 +903,11 @@
     "CaptureController",
     "CaptureController.prototype",
     "CaptureController.prototype.setFocusBehavior",
+    "CaretPosition",
+    "CaretPosition.prototype",
+    "CaretPosition.prototype.getClientRect",
+    "CaretPosition.prototype.offset",
+    "CaretPosition.prototype.offsetNode",
     "ChannelMergerNode",
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
@@ -1303,6 +1309,7 @@
     "ElementInternals.prototype.ariaChecked",
     "ElementInternals.prototype.ariaColCount",
     "ElementInternals.prototype.ariaColIndex",
+    "ElementInternals.prototype.ariaColIndexText",
     "ElementInternals.prototype.ariaColSpan",
     "ElementInternals.prototype.ariaCurrent",
     "ElementInternals.prototype.ariaDescription",
@@ -1328,6 +1335,7 @@
     "ElementInternals.prototype.ariaRoleDescription",
     "ElementInternals.prototype.ariaRowCount",
     "ElementInternals.prototype.ariaRowIndex",
+    "ElementInternals.prototype.ariaRowIndexText",
     "ElementInternals.prototype.ariaRowSpan",
     "ElementInternals.prototype.ariaSelected",
     "ElementInternals.prototype.ariaSetSize",
@@ -2973,6 +2981,7 @@
     "Intl.Locale.prototype.caseFirst",
     "Intl.Locale.prototype.collation",
     "Intl.Locale.prototype.collations",
+    "Intl.Locale.prototype.firstDayOfWeek",
     "Intl.Locale.prototype.hourCycle",
     "Intl.Locale.prototype.hourCycles",
     "Intl.Locale.prototype.language",
@@ -3647,14 +3656,21 @@
     "NavigationTransition.prototype.navigationType",
     "Navigator",
     "Navigator.prototype",
+    "Navigator.prototype.adAuctionComponents",
     "Navigator.prototype.appCodeName",
     "Navigator.prototype.appName",
     "Navigator.prototype.appVersion",
+    "Navigator.prototype.canLoadAdAuctionFencedFrame",
     "Navigator.prototype.clearAppBadge",
+    "Navigator.prototype.clearOriginJoinedAdInterestGroups",
     "Navigator.prototype.clipboard",
     "Navigator.prototype.connection",
     "Navigator.prototype.cookieEnabled",
+    "Navigator.prototype.createAuctionNonce",
     "Navigator.prototype.credentials",
+    "Navigator.prototype.deprecatedReplaceInURN",
+    "Navigator.prototype.deprecatedRunAdAuctionEnforcesKAnonymity",
+    "Navigator.prototype.deprecatedURNToURL",
     "Navigator.prototype.deviceMemory",
     "Navigator.prototype.doNotTrack",
     "Navigator.prototype.geolocation",
@@ -3667,9 +3683,11 @@
     "Navigator.prototype.hid",
     "Navigator.prototype.ink",
     "Navigator.prototype.javaEnabled",
+    "Navigator.prototype.joinAdInterestGroup",
     "Navigator.prototype.keyboard",
     "Navigator.prototype.language",
     "Navigator.prototype.languages",
+    "Navigator.prototype.leaveAdInterestGroup",
     "Navigator.prototype.locks",
     "Navigator.prototype.login",
     "Navigator.prototype.managed",
@@ -3686,9 +3704,11 @@
     "Navigator.prototype.presentation",
     "Navigator.prototype.product",
     "Navigator.prototype.productSub",
+    "Navigator.prototype.protectedAudience",
     "Navigator.prototype.registerProtocolHandler",
     "Navigator.prototype.requestMIDIAccess",
     "Navigator.prototype.requestMediaKeySystemAccess",
+    "Navigator.prototype.runAdAuction",
     "Navigator.prototype.scheduling",
     "Navigator.prototype.sendBeacon",
     "Navigator.prototype.serial",
@@ -3697,6 +3717,7 @@
     "Navigator.prototype.storage",
     "Navigator.prototype.storageBuckets",
     "Navigator.prototype.unregisterProtocolHandler",
+    "Navigator.prototype.updateAdInterestGroups",
     "Navigator.prototype.usb",
     "Navigator.prototype.userActivation",
     "Navigator.prototype.userAgent",
@@ -3975,6 +3996,7 @@
     "Option.prototype.constructor.prototype.ariaChecked",
     "Option.prototype.constructor.prototype.ariaColCount",
     "Option.prototype.constructor.prototype.ariaColIndex",
+    "Option.prototype.constructor.prototype.ariaColIndexText",
     "Option.prototype.constructor.prototype.ariaColSpan",
     "Option.prototype.constructor.prototype.ariaCurrent",
     "Option.prototype.constructor.prototype.ariaDescription",
@@ -4000,6 +4022,7 @@
     "Option.prototype.constructor.prototype.ariaRoleDescription",
     "Option.prototype.constructor.prototype.ariaRowCount",
     "Option.prototype.constructor.prototype.ariaRowIndex",
+    "Option.prototype.constructor.prototype.ariaRowIndexText",
     "Option.prototype.constructor.prototype.ariaRowSpan",
     "Option.prototype.constructor.prototype.ariaSelected",
     "Option.prototype.constructor.prototype.ariaSetSize",
@@ -4065,6 +4088,7 @@
     "Option.prototype.constructor.prototype.constructor.prototype.replaceChild",
     "Option.prototype.constructor.prototype.constructor.prototype.textContent",
     "Option.prototype.constructor.prototype.contentEditable",
+    "Option.prototype.constructor.prototype.currentCSSZoom",
     "Option.prototype.constructor.prototype.dataset",
     "Option.prototype.constructor.prototype.dir",
     "Option.prototype.constructor.prototype.draggable",
@@ -4591,6 +4615,7 @@
     "PointerEvent.prototype.getPredictedEvents",
     "PointerEvent.prototype.height",
     "PointerEvent.prototype.isPrimary",
+    "PointerEvent.prototype.persistentDeviceId",
     "PointerEvent.prototype.pointerId",
     "PointerEvent.prototype.pointerType",
     "PointerEvent.prototype.pressure",
@@ -4682,6 +4707,7 @@
     "Promise.race",
     "Promise.reject",
     "Promise.resolve",
+    "Promise.try",
     "Promise.withResolvers",
     "PromiseRejectionEvent",
     "PromiseRejectionEvent.prototype",
@@ -7585,6 +7611,7 @@
     "XMLDocument.prototype.body",
     "XMLDocument.prototype.browsingTopics",
     "XMLDocument.prototype.captureEvents",
+    "XMLDocument.prototype.caretPositionFromPoint",
     "XMLDocument.prototype.caretRangeFromPoint",
     "XMLDocument.prototype.characterSet",
     "XMLDocument.prototype.charset",
```

  
#### 127.0.6533.119 (`2024-8-13`) 
No browser API changes.

  
#### 127.0.6533.99 (`2024-8-6`) 
No browser API changes.

  
#### 127.0.6533.88 (`2024-7-30`) 
No browser API changes.

  
#### 127.0.6533.72 (`2024-7-23`) ⚡
Added 10 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_126.0.6478.182_to_127.0.6533.72.diff), [json](./browser_apis/chrome-stable_126.0.6478.182_to_127.0.6533.72.json), [full list](./browser_apis/chrome-stable_127.0.6533.72.json))
 ```diff
--- ./browser_apis/chrome-stable_126.0.6478.182.json	2024-07-24 01:03:27.735632014 +0000
+++ ./browser_apis/chrome-stable_127.0.6533.72.json	2024-07-24 01:03:59.299346896 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8454,
+  "browserApiCount": 8464,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -906,6 +906,11 @@
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
     "ChannelSplitterNode.prototype",
+    "ChapterInformation",
+    "ChapterInformation.prototype",
+    "ChapterInformation.prototype.artwork",
+    "ChapterInformation.prototype.startTime",
+    "ChapterInformation.prototype.title",
     "CharacterBoundsUpdateEvent",
     "CharacterBoundsUpdateEvent.prototype",
     "CharacterBoundsUpdateEvent.prototype.rangeEnd",
@@ -1540,6 +1545,7 @@
     "GPUAdapter",
     "GPUAdapter.prototype",
     "GPUAdapter.prototype.features",
+    "GPUAdapter.prototype.info",
     "GPUAdapter.prototype.isFallbackAdapter",
     "GPUAdapter.prototype.limits",
     "GPUAdapter.prototype.requestAdapterInfo",
@@ -3394,6 +3400,7 @@
     "MediaMetadata.prototype.album",
     "MediaMetadata.prototype.artist",
     "MediaMetadata.prototype.artwork",
+    "MediaMetadata.prototype.chapterInfo",
     "MediaMetadata.prototype.title",
     "MediaQueryList",
     "MediaQueryList.prototype",
@@ -4680,6 +4687,9 @@
     "PromiseRejectionEvent.prototype",
     "PromiseRejectionEvent.prototype.promise",
     "PromiseRejectionEvent.prototype.reason",
+    "ProtectedAudience",
+    "ProtectedAudience.prototype",
+    "ProtectedAudience.prototype.queryFeatureSupport",
     "Proxy",
     "Proxy.revocable",
     "PublicKeyCredential",
```

  
#### 126.0.6478.182 (`2024-7-16`) 
No browser API changes.

  
#### 126.0.6478.126 (`2024-6-24`) 
No browser API changes.

  
#### 126.0.6478.114 (`2024-6-18`) 
No browser API changes.

  
#### 126.0.6478.61 (`2024-6-13`) 
No browser API changes.

  
#### 126.0.6478.55 (`2024-6-11`) ⚡
Added 57 APIs, removed 6 (see: [diff](./browser_apis/chrome-stable_125.0.6422.141_to_126.0.6478.55.diff), [json](./browser_apis/chrome-stable_125.0.6422.141_to_126.0.6478.55.json), [full list](./browser_apis/chrome-stable_126.0.6478.55.json))
 ```diff
--- ./browser_apis/chrome-stable_125.0.6422.141.json	2024-06-12 01:00:40.884995370 +0000
+++ ./browser_apis/chrome-stable_126.0.6478.55.json	2024-06-12 01:01:08.341524213 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8403,
+  "browserApiCount": 8454,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -795,6 +795,10 @@
     "CSSVariableReferenceValue.prototype",
     "CSSVariableReferenceValue.prototype.fallback",
     "CSSVariableReferenceValue.prototype.variable",
+    "CSSViewTransitionRule",
+    "CSSViewTransitionRule.prototype",
+    "CSSViewTransitionRule.prototype.navigation",
+    "CSSViewTransitionRule.prototype.types",
     "Cache",
     "Cache.prototype",
     "Cache.prototype.add",
@@ -925,6 +929,13 @@
     "CloseEvent.prototype.code",
     "CloseEvent.prototype.reason",
     "CloseEvent.prototype.wasClean",
+    "CloseWatcher",
+    "CloseWatcher.prototype",
+    "CloseWatcher.prototype.close",
+    "CloseWatcher.prototype.destroy",
+    "CloseWatcher.prototype.oncancel",
+    "CloseWatcher.prototype.onclose",
+    "CloseWatcher.prototype.requestClose",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -1396,6 +1407,16 @@
     "FederatedCredential.prototype.name",
     "FederatedCredential.prototype.protocol",
     "FederatedCredential.prototype.provider",
+    "Fence",
+    "Fence.prototype",
+    "Fence.prototype.getNestedConfigs",
+    "Fence.prototype.reportEvent",
+    "Fence.prototype.setReportEventDataForAutomaticBeacons",
+    "FencedFrameConfig",
+    "FencedFrameConfig.prototype",
+    "FencedFrameConfig.prototype.height",
+    "FencedFrameConfig.prototype.setSharedStorageContext",
+    "FencedFrameConfig.prototype.width",
     "File",
     "File.prototype",
     "File.prototype.arrayBuffer",
@@ -1799,6 +1820,7 @@
     "GamepadEvent.prototype.gamepad",
     "GamepadHapticActuator",
     "GamepadHapticActuator.prototype",
+    "GamepadHapticActuator.prototype.effects",
     "GamepadHapticActuator.prototype.playEffect",
     "GamepadHapticActuator.prototype.reset",
     "GamepadHapticActuator.prototype.type",
@@ -1816,10 +1838,12 @@
     "GeolocationCoordinates.prototype.latitude",
     "GeolocationCoordinates.prototype.longitude",
     "GeolocationCoordinates.prototype.speed",
+    "GeolocationCoordinates.prototype.toJSON",
     "GeolocationPosition",
     "GeolocationPosition.prototype",
     "GeolocationPosition.prototype.coords",
     "GeolocationPosition.prototype.timestamp",
+    "GeolocationPosition.prototype.toJSON",
     "GeolocationPositionError",
     "GeolocationPositionError.prototype",
     "GeolocationPositionError.prototype.code",
@@ -2021,6 +2045,14 @@
     "HTMLEmbedElement.prototype.src",
     "HTMLEmbedElement.prototype.type",
     "HTMLEmbedElement.prototype.width",
+    "HTMLFencedFrameElement",
+    "HTMLFencedFrameElement.canLoadOpaqueURL",
+    "HTMLFencedFrameElement.prototype",
+    "HTMLFencedFrameElement.prototype.allow",
+    "HTMLFencedFrameElement.prototype.config",
+    "HTMLFencedFrameElement.prototype.height",
+    "HTMLFencedFrameElement.prototype.sandbox",
+    "HTMLFencedFrameElement.prototype.width",
     "HTMLFieldSetElement",
     "HTMLFieldSetElement.prototype",
     "HTMLFieldSetElement.prototype.checkValidity",
@@ -2122,6 +2154,7 @@
     "HTMLIFrameElement.prototype.allow",
     "HTMLIFrameElement.prototype.allowFullscreen",
     "HTMLIFrameElement.prototype.allowPaymentRequest",
+    "HTMLIFrameElement.prototype.browsingTopics",
     "HTMLIFrameElement.prototype.contentDocument",
     "HTMLIFrameElement.prototype.contentWindow",
     "HTMLIFrameElement.prototype.credentialless",
@@ -2584,13 +2617,7 @@
     "HTMLVideoElement.prototype.videoHeight",
     "HTMLVideoElement.prototype.videoWidth",
     "HTMLVideoElement.prototype.webkitDecodedFrameCount",
-    "HTMLVideoElement.prototype.webkitDisplayingFullscreen",
     "HTMLVideoElement.prototype.webkitDroppedFrameCount",
-    "HTMLVideoElement.prototype.webkitEnterFullScreen",
-    "HTMLVideoElement.prototype.webkitEnterFullscreen",
-    "HTMLVideoElement.prototype.webkitExitFullScreen",
-    "HTMLVideoElement.prototype.webkitExitFullscreen",
-    "HTMLVideoElement.prototype.webkitSupportsFullscreen",
     "HTMLVideoElement.prototype.width",
     "HashChangeEvent",
     "HashChangeEvent.prototype",
@@ -4258,9 +4285,11 @@
     "OverconstrainedError.prototype.constraint",
     "PageRevealEvent",
     "PageRevealEvent.prototype",
+    "PageRevealEvent.prototype.viewTransition",
     "PageSwapEvent",
     "PageSwapEvent.prototype",
     "PageSwapEvent.prototype.activation",
+    "PageSwapEvent.prototype.viewTransition",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -6040,6 +6069,22 @@
     "ShadowRoot.prototype.setHTMLUnsafe",
     "ShadowRoot.prototype.slotAssignment",
     "ShadowRoot.prototype.styleSheets",
+    "SharedStorage",
+    "SharedStorage.prototype",
+    "SharedStorage.prototype.append",
+    "SharedStorage.prototype.clear",
+    "SharedStorage.prototype.createWorklet",
+    "SharedStorage.prototype.delete",
+    "SharedStorage.prototype.get",
+    "SharedStorage.prototype.run",
+    "SharedStorage.prototype.selectURL",
+    "SharedStorage.prototype.set",
+    "SharedStorage.prototype.worklet",
+    "SharedStorageWorklet",
+    "SharedStorageWorklet.prototype",
+    "SharedStorageWorklet.prototype.addModule",
+    "SharedStorageWorklet.prototype.run",
+    "SharedStorageWorklet.prototype.selectURL",
     "SharedWorker",
     "SharedWorker.prototype",
     "SharedWorker.prototype.onerror",
@@ -6793,6 +6838,7 @@
     "VisualViewport.prototype.offsetTop",
     "VisualViewport.prototype.onresize",
     "VisualViewport.prototype.onscroll",
+    "VisualViewport.prototype.onscrollend",
     "VisualViewport.prototype.pageLeft",
     "VisualViewport.prototype.pageTop",
     "VisualViewport.prototype.scale",
@@ -7299,6 +7345,7 @@
     "WebGLUniformLocation.prototype",
     "WebGLVertexArrayObject",
     "WebGLVertexArrayObject.prototype",
+    "WebGLVertexArrayObject.prototype.constructor",
     "WebKitCSSMatrix",
     "WebKitCSSMatrix.fromFloat32Array",
     "WebKitCSSMatrix.fromFloat64Array",
@@ -7526,6 +7573,7 @@
     "XMLDocument.prototype.applets",
     "XMLDocument.prototype.bgColor",
     "XMLDocument.prototype.body",
+    "XMLDocument.prototype.browsingTopics",
     "XMLDocument.prototype.captureEvents",
     "XMLDocument.prototype.caretRangeFromPoint",
     "XMLDocument.prototype.characterSet",
@@ -8080,6 +8128,7 @@
     "eval",
     "event",
     "external",
+    "fence",
     "fetch",
     "find",
     "focus",
@@ -8265,6 +8314,7 @@
     "sessionStorage",
     "setInterval",
     "setTimeout",
+    "sharedStorage",
     "showDirectoryPicker",
     "showOpenFilePicker",
     "showSaveFilePicker",
@@ -8388,6 +8438,7 @@
     "webkitURL",
     "webkitURL.canParse",
     "webkitURL.createObjectURL",
+    "webkitURL.parse",
     "webkitURL.prototype",
     "webkitURL.prototype.hash",
     "webkitURL.prototype.host",
```

  
#### 125.0.6422.141 (`2024-5-30`) 
No browser API changes.

  
#### 125.0.6422.112 (`2024-5-23`) 
No browser API changes.

  
#### 125.0.6422.76 (`2024-5-21`) 
No browser API changes.

  
#### 125.0.6422.60 (`2024-5-15`) ⚡
Added 136 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_124.0.6367.207_to_125.0.6422.60.diff), [json](./browser_apis/chrome-stable_124.0.6367.207_to_125.0.6422.60.json), [full list](./browser_apis/chrome-stable_125.0.6422.60.json))
 ```diff
--- ./browser_apis/chrome-stable_124.0.6367.207.json	2024-05-16 00:57:52.011183835 +0000
+++ ./browser_apis/chrome-stable_125.0.6422.60.json	2024-05-16 00:58:10.919368769 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8267,
+  "browserApiCount": 8403,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -566,6 +566,82 @@
     "CSSPerspective",
     "CSSPerspective.prototype",
     "CSSPerspective.prototype.length",
+    "CSSPositionTryDescriptors",
+    "CSSPositionTryDescriptors.prototype",
+    "CSSPositionTryDescriptors.prototype.align-self",
+    "CSSPositionTryDescriptors.prototype.alignSelf",
+    "CSSPositionTryDescriptors.prototype.block-size",
+    "CSSPositionTryDescriptors.prototype.blockSize",
+    "CSSPositionTryDescriptors.prototype.bottom",
+    "CSSPositionTryDescriptors.prototype.height",
+    "CSSPositionTryDescriptors.prototype.inline-size",
+    "CSSPositionTryDescriptors.prototype.inlineSize",
+    "CSSPositionTryDescriptors.prototype.inset",
+    "CSSPositionTryDescriptors.prototype.inset-area",
+    "CSSPositionTryDescriptors.prototype.inset-block",
+    "CSSPositionTryDescriptors.prototype.inset-block-end",
+    "CSSPositionTryDescriptors.prototype.inset-block-start",
+    "CSSPositionTryDescriptors.prototype.inset-inline",
+    "CSSPositionTryDescriptors.prototype.inset-inline-end",
+    "CSSPositionTryDescriptors.prototype.inset-inline-start",
+    "CSSPositionTryDescriptors.prototype.insetArea",
+    "CSSPositionTryDescriptors.prototype.insetBlock",
+    "CSSPositionTryDescriptors.prototype.insetBlockEnd",
+    "CSSPositionTryDescriptors.prototype.insetBlockStart",
+    "CSSPositionTryDescriptors.prototype.insetInline",
+    "CSSPositionTryDescriptors.prototype.insetInlineEnd",
+    "CSSPositionTryDescriptors.prototype.insetInlineStart",
+    "CSSPositionTryDescriptors.prototype.justify-self",
+    "CSSPositionTryDescriptors.prototype.justifySelf",
+    "CSSPositionTryDescriptors.prototype.left",
+    "CSSPositionTryDescriptors.prototype.margin",
+    "CSSPositionTryDescriptors.prototype.margin-block",
+    "CSSPositionTryDescriptors.prototype.margin-block-end",
+    "CSSPositionTryDescriptors.prototype.margin-block-start",
+    "CSSPositionTryDescriptors.prototype.margin-bottom",
+    "CSSPositionTryDescriptors.prototype.margin-inline",
+    "CSSPositionTryDescriptors.prototype.margin-inline-end",
+    "CSSPositionTryDescriptors.prototype.margin-inline-start",
+    "CSSPositionTryDescriptors.prototype.margin-left",
+    "CSSPositionTryDescriptors.prototype.margin-right",
+    "CSSPositionTryDescriptors.prototype.margin-top",
+    "CSSPositionTryDescriptors.prototype.marginBlock",
+    "CSSPositionTryDescriptors.prototype.marginBlockEnd",
+    "CSSPositionTryDescriptors.prototype.marginBlockStart",
+    "CSSPositionTryDescriptors.prototype.marginBottom",
+    "CSSPositionTryDescriptors.prototype.marginInline",
+    "CSSPositionTryDescriptors.prototype.marginInlineEnd",
+    "CSSPositionTryDescriptors.prototype.marginInlineStart",
+    "CSSPositionTryDescriptors.prototype.marginLeft",
+    "CSSPositionTryDescriptors.prototype.marginRight",
+    "CSSPositionTryDescriptors.prototype.marginTop",
+    "CSSPositionTryDescriptors.prototype.max-block-size",
+    "CSSPositionTryDescriptors.prototype.max-height",
+    "CSSPositionTryDescriptors.prototype.max-inline-size",
+    "CSSPositionTryDescriptors.prototype.max-width",
+    "CSSPositionTryDescriptors.prototype.maxBlockSize",
+    "CSSPositionTryDescriptors.prototype.maxHeight",
+    "CSSPositionTryDescriptors.prototype.maxInlineSize",
+    "CSSPositionTryDescriptors.prototype.maxWidth",
+    "CSSPositionTryDescriptors.prototype.min-block-size",
+    "CSSPositionTryDescriptors.prototype.min-height",
+    "CSSPositionTryDescriptors.prototype.min-inline-size",
+    "CSSPositionTryDescriptors.prototype.min-width",
+    "CSSPositionTryDescriptors.prototype.minBlockSize",
+    "CSSPositionTryDescriptors.prototype.minHeight",
+    "CSSPositionTryDescriptors.prototype.minInlineSize",
+    "CSSPositionTryDescriptors.prototype.minWidth",
+    "CSSPositionTryDescriptors.prototype.place-self",
+    "CSSPositionTryDescriptors.prototype.placeSelf",
+    "CSSPositionTryDescriptors.prototype.position-anchor",
+    "CSSPositionTryDescriptors.prototype.positionAnchor",
+    "CSSPositionTryDescriptors.prototype.right",
+    "CSSPositionTryDescriptors.prototype.top",
+    "CSSPositionTryDescriptors.prototype.width",
+    "CSSPositionTryRule",
+    "CSSPositionTryRule.prototype",
+    "CSSPositionTryRule.prototype.name",
+    "CSSPositionTryRule.prototype.style",
     "CSSPositionValue",
     "CSSPositionValue.prototype",
     "CSSPositionValue.prototype.x",
@@ -1790,6 +1866,7 @@
     "HTMLAllCollection.prototype.namedItem",
     "HTMLAnchorElement",
     "HTMLAnchorElement.prototype",
+    "HTMLAnchorElement.prototype.attributionSrc",
     "HTMLAnchorElement.prototype.charset",
     "HTMLAnchorElement.prototype.coords",
     "HTMLAnchorElement.prototype.download",
@@ -2292,6 +2369,7 @@
     "HTMLScriptElement",
     "HTMLScriptElement.prototype",
     "HTMLScriptElement.prototype.async",
+    "HTMLScriptElement.prototype.attributionSrc",
     "HTMLScriptElement.prototype.blocking",
     "HTMLScriptElement.prototype.charset",
     "HTMLScriptElement.prototype.crossOrigin",
@@ -2437,6 +2515,7 @@
     "HTMLTemplateElement.prototype.shadowRootClonable",
     "HTMLTemplateElement.prototype.shadowRootDelegatesFocus",
     "HTMLTemplateElement.prototype.shadowRootMode",
+    "HTMLTemplateElement.prototype.shadowRootSerializable",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
     "HTMLTextAreaElement.prototype.autocomplete",
@@ -2706,6 +2785,7 @@
     "Image.prototype",
     "Image.prototype.align",
     "Image.prototype.alt",
+    "Image.prototype.attributionSrc",
     "Image.prototype.border",
     "Image.prototype.complete",
     "Image.prototype.constructor",
@@ -3354,6 +3434,18 @@
     "MediaStreamEvent",
     "MediaStreamEvent.prototype",
     "MediaStreamEvent.prototype.stream",
+    "MediaStreamTrackAudioStats",
+    "MediaStreamTrackAudioStats.prototype",
+    "MediaStreamTrackAudioStats.prototype.averageLatency",
+    "MediaStreamTrackAudioStats.prototype.deliveredFrames",
+    "MediaStreamTrackAudioStats.prototype.deliveredFramesDuration",
+    "MediaStreamTrackAudioStats.prototype.latency",
+    "MediaStreamTrackAudioStats.prototype.maximumLatency",
+    "MediaStreamTrackAudioStats.prototype.minimumLatency",
+    "MediaStreamTrackAudioStats.prototype.resetLatency",
+    "MediaStreamTrackAudioStats.prototype.toJSON",
+    "MediaStreamTrackAudioStats.prototype.totalFrames",
+    "MediaStreamTrackAudioStats.prototype.totalFramesDuration",
     "MediaStreamTrackEvent",
     "MediaStreamTrackEvent.prototype",
     "MediaStreamTrackEvent.prototype.track",
@@ -3618,6 +3710,19 @@
     "NodeIterator.prototype.referenceNode",
     "NodeIterator.prototype.root",
     "NodeIterator.prototype.whatToShow",
+    "NotRestoredReasonDetails",
+    "NotRestoredReasonDetails.prototype",
+    "NotRestoredReasonDetails.prototype.reason",
+    "NotRestoredReasonDetails.prototype.toJSON",
+    "NotRestoredReasons",
+    "NotRestoredReasons.prototype",
+    "NotRestoredReasons.prototype.children",
+    "NotRestoredReasons.prototype.id",
+    "NotRestoredReasons.prototype.name",
+    "NotRestoredReasons.prototype.reasons",
+    "NotRestoredReasons.prototype.src",
+    "NotRestoredReasons.prototype.toJSON",
+    "NotRestoredReasons.prototype.url",
     "Notification",
     "Notification.maxActions",
     "Notification.permission",
@@ -3945,6 +4050,7 @@
     "Option.prototype.constructor.prototype.getElementsByClassName",
     "Option.prototype.constructor.prototype.getElementsByTagName",
     "Option.prototype.constructor.prototype.getElementsByTagNameNS",
+    "Option.prototype.constructor.prototype.getHTML",
     "Option.prototype.constructor.prototype.getInnerHTML",
     "Option.prototype.constructor.prototype.hasAttribute",
     "Option.prototype.constructor.prototype.hasAttributeNS",
@@ -4317,6 +4423,7 @@
     "PerformanceNavigationTiming.prototype.domInteractive",
     "PerformanceNavigationTiming.prototype.loadEventEnd",
     "PerformanceNavigationTiming.prototype.loadEventStart",
+    "PerformanceNavigationTiming.prototype.notRestoredReasons",
     "PerformanceNavigationTiming.prototype.redirectCount",
     "PerformanceNavigationTiming.prototype.toJSON",
     "PerformanceNavigationTiming.prototype.type",
@@ -4501,6 +4608,19 @@
     "PresentationRequest.prototype.onconnectionavailable",
     "PresentationRequest.prototype.reconnect",
     "PresentationRequest.prototype.start",
+    "PressureObserver",
+    "PressureObserver.knownSources",
+    "PressureObserver.prototype",
+    "PressureObserver.prototype.disconnect",
+    "PressureObserver.prototype.observe",
+    "PressureObserver.prototype.takeRecords",
+    "PressureObserver.prototype.unobserve",
+    "PressureRecord",
+    "PressureRecord.prototype",
+    "PressureRecord.prototype.source",
+    "PressureRecord.prototype.state",
+    "PressureRecord.prototype.time",
+    "PressureRecord.prototype.toJSON",
     "ProcessingInstruction",
     "ProcessingInstruction.prototype",
     "ProcessingInstruction.prototype.sheet",
@@ -5902,6 +6022,7 @@
     "ShadowRoot.prototype.fullscreenElement",
     "ShadowRoot.prototype.getAnimations",
     "ShadowRoot.prototype.getElementById",
+    "ShadowRoot.prototype.getHTML",
     "ShadowRoot.prototype.getInnerHTML",
     "ShadowRoot.prototype.getSelection",
     "ShadowRoot.prototype.host",
@@ -5915,6 +6036,7 @@
     "ShadowRoot.prototype.querySelector",
     "ShadowRoot.prototype.querySelectorAll",
     "ShadowRoot.prototype.replaceChildren",
+    "ShadowRoot.prototype.serializable",
     "ShadowRoot.prototype.setHTMLUnsafe",
     "ShadowRoot.prototype.slotAssignment",
     "ShadowRoot.prototype.styleSheets",
@@ -6634,7 +6756,19 @@
     "ViewTransition.prototype.finished",
     "ViewTransition.prototype.ready",
     "ViewTransition.prototype.skipTransition",
+    "ViewTransition.prototype.types",
     "ViewTransition.prototype.updateCallbackDone",
+    "ViewTransitionTypeSet",
+    "ViewTransitionTypeSet.prototype",
+    "ViewTransitionTypeSet.prototype.add",
+    "ViewTransitionTypeSet.prototype.clear",
+    "ViewTransitionTypeSet.prototype.delete",
+    "ViewTransitionTypeSet.prototype.entries",
+    "ViewTransitionTypeSet.prototype.forEach",
+    "ViewTransitionTypeSet.prototype.has",
+    "ViewTransitionTypeSet.prototype.keys",
+    "ViewTransitionTypeSet.prototype.size",
+    "ViewTransitionTypeSet.prototype.values",
     "VirtualKeyboard",
     "VirtualKeyboard.prototype",
     "VirtualKeyboard.prototype.boundingRect",
@@ -7456,6 +7590,7 @@
     "XMLDocument.prototype.hasPrivateToken",
     "XMLDocument.prototype.hasRedemptionRecord",
     "XMLDocument.prototype.hasStorageAccess",
+    "XMLDocument.prototype.hasUnpartitionedCookieAccess",
     "XMLDocument.prototype.head",
     "XMLDocument.prototype.hidden",
     "XMLDocument.prototype.images",
@@ -7637,6 +7772,7 @@
     "XMLHttpRequest.prototype.responseURL",
     "XMLHttpRequest.prototype.responseXML",
     "XMLHttpRequest.prototype.send",
+    "XMLHttpRequest.prototype.setAttributionReporting",
     "XMLHttpRequest.prototype.setPrivateToken",
     "XMLHttpRequest.prototype.setRequestHeader",
     "XMLHttpRequest.prototype.status",
```

  
#### 124.0.6367.207 (`2024-5-13`) 
No browser API changes.

  
#### 124.0.6367.201 (`2024-5-9`) 
No browser API changes.

  
#### 124.0.6367.155 (`2024-5-7`) 
No browser API changes.

  
#### 124.0.6367.118 (`2024-4-30`) 
No browser API changes.

  
#### 124.0.6367.91 (`2024-4-25`) 
No browser API changes.

  
#### 124.0.6367.78 (`2024-4-23`) 
No browser API changes.

  
#### 124.0.6367.60 (`2024-4-16`) ⚡
Added 27 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_123.0.6312.122_to_124.0.6367.60.diff), [json](./browser_apis/chrome-stable_123.0.6312.122_to_124.0.6367.60.json), [full list](./browser_apis/chrome-stable_124.0.6367.60.json))
 ```diff
--- ./browser_apis/chrome-stable_123.0.6312.122.json	2024-04-17 00:55:26.353795626 +0000
+++ ./browser_apis/chrome-stable_124.0.6367.60.json	2024-04-17 00:55:46.953966259 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8240,
+  "browserApiCount": 8267,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2062,6 +2062,7 @@
     "HTMLIFrameElement.prototype.referrerPolicy",
     "HTMLIFrameElement.prototype.sandbox",
     "HTMLIFrameElement.prototype.scrolling",
+    "HTMLIFrameElement.prototype.sharedStorageWritable",
     "HTMLIFrameElement.prototype.src",
     "HTMLIFrameElement.prototype.srcdoc",
     "HTMLIFrameElement.prototype.width",
@@ -2433,6 +2434,7 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
+    "HTMLTemplateElement.prototype.shadowRootClonable",
     "HTMLTemplateElement.prototype.shadowRootDelegatesFocus",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
@@ -2722,6 +2724,7 @@
     "Image.prototype.naturalHeight",
     "Image.prototype.naturalWidth",
     "Image.prototype.referrerPolicy",
+    "Image.prototype.sharedStorageWritable",
     "Image.prototype.sizes",
     "Image.prototype.src",
     "Image.prototype.srcset",
@@ -4108,6 +4111,7 @@
     "Option.prototype.constructor.prototype.setAttributeNS",
     "Option.prototype.constructor.prototype.setAttributeNode",
     "Option.prototype.constructor.prototype.setAttributeNodeNS",
+    "Option.prototype.constructor.prototype.setHTMLUnsafe",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
     "Option.prototype.constructor.prototype.showPopover",
@@ -4124,6 +4128,7 @@
     "Option.prototype.constructor.prototype.webkitMatchesSelector",
     "Option.prototype.constructor.prototype.webkitRequestFullScreen",
     "Option.prototype.constructor.prototype.webkitRequestFullscreen",
+    "Option.prototype.constructor.prototype.writingSuggestions",
     "Option.prototype.defaultSelected",
     "Option.prototype.disabled",
     "Option.prototype.form",
@@ -4147,6 +4152,9 @@
     "OverconstrainedError.prototype.constraint",
     "PageRevealEvent",
     "PageRevealEvent.prototype",
+    "PageSwapEvent",
+    "PageSwapEvent.prototype",
+    "PageSwapEvent.prototype.activation",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -4635,11 +4643,13 @@
     "RTCIceCandidate.prototype.protocol",
     "RTCIceCandidate.prototype.relatedAddress",
     "RTCIceCandidate.prototype.relatedPort",
+    "RTCIceCandidate.prototype.relayProtocol",
     "RTCIceCandidate.prototype.sdpMLineIndex",
     "RTCIceCandidate.prototype.sdpMid",
     "RTCIceCandidate.prototype.tcpType",
     "RTCIceCandidate.prototype.toJSON",
     "RTCIceCandidate.prototype.type",
+    "RTCIceCandidate.prototype.url",
     "RTCIceCandidate.prototype.usernameFragment",
     "RTCIceTransport",
     "RTCIceTransport.prototype",
@@ -4673,6 +4683,7 @@
     "RTCRtpReceiver.prototype.getParameters",
     "RTCRtpReceiver.prototype.getStats",
     "RTCRtpReceiver.prototype.getSynchronizationSources",
+    "RTCRtpReceiver.prototype.jitterBufferTarget",
     "RTCRtpReceiver.prototype.playoutDelayHint",
     "RTCRtpReceiver.prototype.rtcpTransport",
     "RTCRtpReceiver.prototype.track",
@@ -4781,6 +4792,7 @@
     "ReadableStream.prototype.pipeThrough",
     "ReadableStream.prototype.pipeTo",
     "ReadableStream.prototype.tee",
+    "ReadableStream.prototype.values",
     "ReadableStreamBYOBReader",
     "ReadableStreamBYOBReader.prototype",
     "ReadableStreamBYOBReader.prototype.cancel",
@@ -4893,6 +4905,7 @@
     "Request.prototype.referrer",
     "Request.prototype.referrerPolicy",
     "Request.prototype.signal",
+    "Request.prototype.targetAddressSpace",
     "Request.prototype.text",
     "Request.prototype.url",
     "ResizeObserver",
@@ -5880,6 +5893,7 @@
     "ShadowRoot.prototype.append",
     "ShadowRoot.prototype.childElementCount",
     "ShadowRoot.prototype.children",
+    "ShadowRoot.prototype.clonable",
     "ShadowRoot.prototype.constructor",
     "ShadowRoot.prototype.delegatesFocus",
     "ShadowRoot.prototype.elementFromPoint",
@@ -5901,6 +5915,7 @@
     "ShadowRoot.prototype.querySelector",
     "ShadowRoot.prototype.querySelectorAll",
     "ShadowRoot.prototype.replaceChildren",
+    "ShadowRoot.prototype.setHTMLUnsafe",
     "ShadowRoot.prototype.slotAssignment",
     "ShadowRoot.prototype.styleSheets",
     "SharedWorker",
@@ -7232,6 +7247,16 @@
     "WebSocket.prototype.readyState",
     "WebSocket.prototype.send",
     "WebSocket.prototype.url",
+    "WebSocketError",
+    "WebSocketError.prototype",
+    "WebSocketError.prototype.closeCode",
+    "WebSocketError.prototype.reason",
+    "WebSocketStream",
+    "WebSocketStream.prototype",
+    "WebSocketStream.prototype.close",
+    "WebSocketStream.prototype.closed",
+    "WebSocketStream.prototype.opened",
+    "WebSocketStream.prototype.url",
     "WebTransport",
     "WebTransport.prototype",
     "WebTransport.prototype.close",
@@ -7377,6 +7402,7 @@
     "XMLDocument.prototype.close",
     "XMLDocument.prototype.compatMode",
     "XMLDocument.prototype.constructor",
+    "XMLDocument.prototype.constructor.parseHTMLUnsafe",
     "XMLDocument.prototype.contentType",
     "XMLDocument.prototype.cookie",
     "XMLDocument.prototype.createAttribute",
@@ -8017,6 +8043,7 @@
     "onpagehide",
     "onpagereveal",
     "onpageshow",
+    "onpageswap",
     "onpause",
     "onplay",
     "onplaying",
```

  
#### 123.0.6312.122 (`2024-4-10`) 
No browser API changes.

  
#### 123.0.6312.105 (`2024-4-2`) 
No browser API changes.

  
#### 123.0.6312.86 (`2024-3-26`) 
No browser API changes.

  
#### 123.0.6312.58 (`2024-3-19`) ⚡
Added 50 APIs, removed 18 (see: [diff](./browser_apis/chrome-stable_122.0.6261.128_to_123.0.6312.58.diff), [json](./browser_apis/chrome-stable_122.0.6261.128_to_123.0.6312.58.json), [full list](./browser_apis/chrome-stable_123.0.6312.58.json))
 ```diff
--- ./browser_apis/chrome-stable_122.0.6261.128.json	2024-03-20 00:53:25.931819084 +0000
+++ ./browser_apis/chrome-stable_123.0.6312.58.json	2024-03-20 00:54:19.291563715 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8208,
+  "browserApiCount": 8240,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -509,6 +509,7 @@
     "CSSKeyframesRule.prototype.cssRules",
     "CSSKeyframesRule.prototype.deleteRule",
     "CSSKeyframesRule.prototype.findRule",
+    "CSSKeyframesRule.prototype.length",
     "CSSKeyframesRule.prototype.name",
     "CSSKeywordValue",
     "CSSKeywordValue.prototype",
@@ -2432,6 +2433,7 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
+    "HTMLTemplateElement.prototype.shadowRootDelegatesFocus",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
@@ -3461,6 +3463,7 @@
     "NavigateEvent.prototype.userInitiated",
     "Navigation",
     "Navigation.prototype",
+    "Navigation.prototype.activation",
     "Navigation.prototype.back",
     "Navigation.prototype.canGoBack",
     "Navigation.prototype.canGoForward",
@@ -3476,6 +3479,11 @@
     "Navigation.prototype.transition",
     "Navigation.prototype.traverseTo",
     "Navigation.prototype.updateCurrentEntry",
+    "NavigationActivation",
+    "NavigationActivation.prototype",
+    "NavigationActivation.prototype.entry",
+    "NavigationActivation.prototype.from",
+    "NavigationActivation.prototype.navigationType",
     "NavigationCurrentEntryChangeEvent",
     "NavigationCurrentEntryChangeEvent.prototype",
     "NavigationCurrentEntryChangeEvent.prototype.from",
@@ -4137,6 +4145,8 @@
     "OverconstrainedError",
     "OverconstrainedError.prototype",
     "OverconstrainedError.prototype.constraint",
+    "PageRevealEvent",
+    "PageRevealEvent.prototype",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -4266,6 +4276,14 @@
     "PerformanceEventTiming.prototype.processingStart",
     "PerformanceEventTiming.prototype.target",
     "PerformanceEventTiming.prototype.toJSON",
+    "PerformanceLongAnimationFrameTiming",
+    "PerformanceLongAnimationFrameTiming.prototype",
+    "PerformanceLongAnimationFrameTiming.prototype.blockingDuration",
+    "PerformanceLongAnimationFrameTiming.prototype.firstUIEventTimestamp",
+    "PerformanceLongAnimationFrameTiming.prototype.renderStart",
+    "PerformanceLongAnimationFrameTiming.prototype.scripts",
+    "PerformanceLongAnimationFrameTiming.prototype.styleAndLayoutStart",
+    "PerformanceLongAnimationFrameTiming.prototype.toJSON",
     "PerformanceLongTaskTiming",
     "PerformanceLongTaskTiming.prototype",
     "PerformanceLongTaskTiming.prototype.attribution",
@@ -4334,6 +4352,19 @@
     "PerformanceResourceTiming.prototype.toJSON",
     "PerformanceResourceTiming.prototype.transferSize",
     "PerformanceResourceTiming.prototype.workerStart",
+    "PerformanceScriptTiming",
+    "PerformanceScriptTiming.prototype",
+    "PerformanceScriptTiming.prototype.executionStart",
+    "PerformanceScriptTiming.prototype.forcedStyleAndLayoutDuration",
+    "PerformanceScriptTiming.prototype.invoker",
+    "PerformanceScriptTiming.prototype.invokerType",
+    "PerformanceScriptTiming.prototype.pauseDuration",
+    "PerformanceScriptTiming.prototype.sourceCharPosition",
+    "PerformanceScriptTiming.prototype.sourceFunctionName",
+    "PerformanceScriptTiming.prototype.sourceURL",
+    "PerformanceScriptTiming.prototype.toJSON",
+    "PerformanceScriptTiming.prototype.window",
+    "PerformanceScriptTiming.prototype.windowAttribution",
     "PerformanceServerTiming",
     "PerformanceServerTiming.prototype",
     "PerformanceServerTiming.prototype.description",
@@ -7237,27 +7268,9 @@
     "WheelEvent.prototype.clientY",
     "WheelEvent.prototype.constructor",
     "WheelEvent.prototype.constructor.prototype",
-    "WheelEvent.prototype.constructor.prototype.bubbles",
-    "WheelEvent.prototype.constructor.prototype.cancelBubble",
-    "WheelEvent.prototype.constructor.prototype.cancelable",
-    "WheelEvent.prototype.constructor.prototype.composed",
-    "WheelEvent.prototype.constructor.prototype.composedPath",
-    "WheelEvent.prototype.constructor.prototype.constructor",
-    "WheelEvent.prototype.constructor.prototype.currentTarget",
-    "WheelEvent.prototype.constructor.prototype.defaultPrevented",
     "WheelEvent.prototype.constructor.prototype.detail",
-    "WheelEvent.prototype.constructor.prototype.eventPhase",
-    "WheelEvent.prototype.constructor.prototype.initEvent",
     "WheelEvent.prototype.constructor.prototype.initUIEvent",
-    "WheelEvent.prototype.constructor.prototype.preventDefault",
-    "WheelEvent.prototype.constructor.prototype.returnValue",
     "WheelEvent.prototype.constructor.prototype.sourceCapabilities",
-    "WheelEvent.prototype.constructor.prototype.srcElement",
-    "WheelEvent.prototype.constructor.prototype.stopImmediatePropagation",
-    "WheelEvent.prototype.constructor.prototype.stopPropagation",
-    "WheelEvent.prototype.constructor.prototype.target",
-    "WheelEvent.prototype.constructor.prototype.timeStamp",
-    "WheelEvent.prototype.constructor.prototype.type",
     "WheelEvent.prototype.constructor.prototype.view",
     "WheelEvent.prototype.constructor.prototype.which",
     "WheelEvent.prototype.ctrlKey",
@@ -7296,7 +7309,25 @@
     "WindowControlsOverlay.prototype.visible",
     "WindowControlsOverlayGeometryChangeEvent",
     "WindowControlsOverlayGeometryChangeEvent.prototype",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.bubbles",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.cancelBubble",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.cancelable",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.composed",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.composedPath",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.constructor",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.currentTarget",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.defaultPrevented",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.eventPhase",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.initEvent",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.preventDefault",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.returnValue",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.srcElement",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.stopImmediatePropagation",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.stopPropagation",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.target",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.timeStamp",
     "WindowControlsOverlayGeometryChangeEvent.prototype.titlebarAreaRect",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.type",
     "WindowControlsOverlayGeometryChangeEvent.prototype.visible",
     "Worker",
     "Worker.prototype",
@@ -7984,6 +8015,7 @@
     "onoffline",
     "ononline",
     "onpagehide",
+    "onpagereveal",
     "onpageshow",
     "onpause",
     "onplay",
```

  
### chrome-unstable
  
#### 131.0.6724.0 (`2024-9-19`) 
No browser API changes.

  
#### 130.0.6710.0 (`2024-9-12`) ⚡
Added 8 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_130.0.6699.3_to_130.0.6710.0.diff), [json](./browser_apis/chrome-unstable_130.0.6699.3_to_130.0.6710.0.json), [full list](./browser_apis/chrome-unstable_130.0.6710.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_130.0.6699.3.json	2024-09-13 01:07:54.727918184 +0000
+++ ./browser_apis/chrome-unstable_130.0.6710.0.json	2024-09-13 01:08:27.760340277 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8509,
+  "browserApiCount": 8517,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2990,6 +2990,13 @@
     "Intl.Locale.prototype.collation",
     "Intl.Locale.prototype.collations",
     "Intl.Locale.prototype.firstDayOfWeek",
+    "Intl.Locale.prototype.getCalendars",
+    "Intl.Locale.prototype.getCollations",
+    "Intl.Locale.prototype.getHourCycles",
+    "Intl.Locale.prototype.getNumberingSystems",
+    "Intl.Locale.prototype.getTextInfo",
+    "Intl.Locale.prototype.getTimeZones",
+    "Intl.Locale.prototype.getWeekInfo",
     "Intl.Locale.prototype.hourCycle",
     "Intl.Locale.prototype.hourCycles",
     "Intl.Locale.prototype.language",
@@ -6018,6 +6025,7 @@
     "SerialPort",
     "SerialPort.prototype",
     "SerialPort.prototype.close",
+    "SerialPort.prototype.connected",
     "SerialPort.prototype.forget",
     "SerialPort.prototype.getInfo",
     "SerialPort.prototype.getSignals",
```

  
#### 130.0.6699.3 (`2024-9-9`) ⚡
Added 3 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_130.0.6683.2_to_130.0.6699.3.diff), [json](./browser_apis/chrome-unstable_130.0.6683.2_to_130.0.6699.3.json), [full list](./browser_apis/chrome-unstable_130.0.6699.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_130.0.6683.2.json	2024-09-10 01:07:59.689190310 +0000
+++ ./browser_apis/chrome-unstable_130.0.6699.3.json	2024-09-10 01:08:22.741300125 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8507,
+  "browserApiCount": 8509,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -557,6 +557,9 @@
     "CSSNamespaceRule.prototype",
     "CSSNamespaceRule.prototype.namespaceURI",
     "CSSNamespaceRule.prototype.prefix",
+    "CSSNestedDeclarations",
+    "CSSNestedDeclarations.prototype",
+    "CSSNestedDeclarations.prototype.style",
     "CSSNumericArray",
     "CSSNumericArray.prototype",
     "CSSNumericArray.prototype.length",
@@ -1225,7 +1228,6 @@
     "DelayNode.prototype.delayTime",
     "DelegatedInkTrailPresenter",
     "DelegatedInkTrailPresenter.prototype",
-    "DelegatedInkTrailPresenter.prototype.expectedImprovement",
     "DelegatedInkTrailPresenter.prototype.presentationArea",
     "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
     "DeviceMotionEvent",
```

  
#### 130.0.6683.2 (`2024-8-30`) ⚡
Added 15 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_130.0.6669.2_to_130.0.6683.2.diff), [json](./browser_apis/chrome-unstable_130.0.6669.2_to_130.0.6683.2.json), [full list](./browser_apis/chrome-unstable_130.0.6683.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_130.0.6669.2.json	2024-08-31 01:06:15.379596834 +0000
+++ ./browser_apis/chrome-unstable_130.0.6683.2.json	2024-08-31 01:06:44.687760791 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8492,
+  "browserApiCount": 8507,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3318,6 +3318,8 @@
     "MathMLElement.prototype.onresize",
     "MathMLElement.prototype.onscroll",
     "MathMLElement.prototype.onscrollend",
+    "MathMLElement.prototype.onscrollsnapchange",
+    "MathMLElement.prototype.onscrollsnapchanging",
     "MathMLElement.prototype.onsecuritypolicyviolation",
     "MathMLElement.prototype.onseeked",
     "MathMLElement.prototype.onseeking",
@@ -4215,6 +4217,8 @@
     "Option.prototype.constructor.prototype.onresize",
     "Option.prototype.constructor.prototype.onscroll",
     "Option.prototype.constructor.prototype.onscrollend",
+    "Option.prototype.constructor.prototype.onscrollsnapchange",
+    "Option.prototype.constructor.prototype.onscrollsnapchanging",
     "Option.prototype.constructor.prototype.onsearch",
     "Option.prototype.constructor.prototype.onsecuritypolicyviolation",
     "Option.prototype.constructor.prototype.onseeked",
@@ -5876,6 +5880,8 @@
     "SVGViewElement.prototype.onresize",
     "SVGViewElement.prototype.onscroll",
     "SVGViewElement.prototype.onscrollend",
+    "SVGViewElement.prototype.onscrollsnapchange",
+    "SVGViewElement.prototype.onscrollsnapchanging",
     "SVGViewElement.prototype.onsecuritypolicyviolation",
     "SVGViewElement.prototype.onseeked",
     "SVGViewElement.prototype.onseeking",
@@ -5909,6 +5915,7 @@
     "Scheduler",
     "Scheduler.prototype",
     "Scheduler.prototype.postTask",
+    "Scheduler.prototype.yield",
     "Scheduling",
     "Scheduling.prototype",
     "Scheduling.prototype.isInputPending",
@@ -6126,6 +6133,10 @@
     "SharedWorker.prototype",
     "SharedWorker.prototype.onerror",
     "SharedWorker.prototype.port",
+    "SnapEvent",
+    "SnapEvent.prototype",
+    "SnapEvent.prototype.snapTargetBlock",
+    "SnapEvent.prototype.snapTargetInline",
     "SourceBuffer",
     "SourceBuffer.prototype",
     "SourceBuffer.prototype.abort",
@@ -7773,6 +7784,8 @@
     "XMLDocument.prototype.onresume",
     "XMLDocument.prototype.onscroll",
     "XMLDocument.prototype.onscrollend",
+    "XMLDocument.prototype.onscrollsnapchange",
+    "XMLDocument.prototype.onscrollsnapchanging",
     "XMLDocument.prototype.onsearch",
     "XMLDocument.prototype.onsecuritypolicyviolation",
     "XMLDocument.prototype.onseeked",
@@ -8287,6 +8300,8 @@
     "onresize",
     "onscroll",
     "onscrollend",
+    "onscrollsnapchange",
+    "onscrollsnapchanging",
     "onsearch",
     "onsecuritypolicyviolation",
     "onseeked",
```

  
#### 130.0.6669.2 (`2024-8-23`) ⚡
Added 6 APIs, removed 8 (see: [diff](./browser_apis/chrome-unstable_129.0.6658.0_to_130.0.6669.2.diff), [json](./browser_apis/chrome-unstable_129.0.6658.0_to_130.0.6669.2.json), [full list](./browser_apis/chrome-unstable_130.0.6669.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_129.0.6658.0.json	2024-08-24 01:02:51.713963847 +0000
+++ ./browser_apis/chrome-unstable_130.0.6669.2.json	2024-08-24 01:03:15.070095713 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8494,
+  "browserApiCount": 8492,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2967,6 +2967,12 @@
     "Intl.DisplayNames.prototype.of",
     "Intl.DisplayNames.prototype.resolvedOptions",
     "Intl.DisplayNames.supportedLocalesOf",
+    "Intl.DurationFormat",
+    "Intl.DurationFormat.prototype",
+    "Intl.DurationFormat.prototype.format",
+    "Intl.DurationFormat.prototype.formatToParts",
+    "Intl.DurationFormat.prototype.resolvedOptions",
+    "Intl.DurationFormat.supportedLocalesOf",
     "Intl.ListFormat",
     "Intl.ListFormat.prototype",
     "Intl.ListFormat.prototype.format",
@@ -3555,14 +3561,6 @@
     "MimeTypeArray.prototype.item",
     "MimeTypeArray.prototype.length",
     "MimeTypeArray.prototype.namedItem",
-    "MutationEvent",
-    "MutationEvent.prototype",
-    "MutationEvent.prototype.attrChange",
-    "MutationEvent.prototype.attrName",
-    "MutationEvent.prototype.initMutationEvent",
-    "MutationEvent.prototype.newValue",
-    "MutationEvent.prototype.prevValue",
-    "MutationEvent.prototype.relatedNode",
     "MutationRecord",
     "MutationRecord.prototype",
     "MutationRecord.prototype.addedNodes",
```

  
#### 129.0.6658.0 (`2024-8-16`) ⚡
Added 3 APIs, removed 2 (see: [diff](./browser_apis/chrome-unstable_129.0.6643.2_to_129.0.6658.0.diff), [json](./browser_apis/chrome-unstable_129.0.6643.2_to_129.0.6658.0.json), [full list](./browser_apis/chrome-unstable_129.0.6658.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_129.0.6643.2.json	2024-08-17 01:01:49.123341676 +0000
+++ ./browser_apis/chrome-unstable_129.0.6658.0.json	2024-08-17 01:02:28.837061594 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8493,
+  "browserApiCount": 8494,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1429,9 +1429,7 @@
     "Fence.prototype.setReportEventDataForAutomaticBeacons",
     "FencedFrameConfig",
     "FencedFrameConfig.prototype",
-    "FencedFrameConfig.prototype.height",
     "FencedFrameConfig.prototype.setSharedStorageContext",
-    "FencedFrameConfig.prototype.width",
     "File",
     "File.prototype",
     "File.prototype.arrayBuffer",
@@ -4723,11 +4721,14 @@
     "PublicKeyCredential",
     "PublicKeyCredential.isConditionalMediationAvailable",
     "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable",
+    "PublicKeyCredential.parseCreationOptionsFromJSON",
+    "PublicKeyCredential.parseRequestOptionsFromJSON",
     "PublicKeyCredential.prototype",
     "PublicKeyCredential.prototype.authenticatorAttachment",
     "PublicKeyCredential.prototype.getClientExtensionResults",
     "PublicKeyCredential.prototype.rawId",
     "PublicKeyCredential.prototype.response",
+    "PublicKeyCredential.prototype.toJSON",
     "PushManager",
     "PushManager.prototype",
     "PushManager.prototype.getSubscription",
```

  
#### 129.0.6643.2 (`2024-8-9`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_129.0.6628.3_to_129.0.6643.2.diff), [json](./browser_apis/chrome-unstable_129.0.6628.3_to_129.0.6643.2.json), [full list](./browser_apis/chrome-unstable_129.0.6643.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_129.0.6628.3.json	2024-08-10 01:04:12.909607618 +0000
+++ ./browser_apis/chrome-unstable_129.0.6643.2.json	2024-08-10 01:04:38.621949347 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8491,
+  "browserApiCount": 8493,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -635,7 +635,9 @@
     "CSSPositionTryDescriptors.prototype.place-self",
     "CSSPositionTryDescriptors.prototype.placeSelf",
     "CSSPositionTryDescriptors.prototype.position-anchor",
+    "CSSPositionTryDescriptors.prototype.position-area",
     "CSSPositionTryDescriptors.prototype.positionAnchor",
+    "CSSPositionTryDescriptors.prototype.positionArea",
     "CSSPositionTryDescriptors.prototype.right",
     "CSSPositionTryDescriptors.prototype.top",
     "CSSPositionTryDescriptors.prototype.width",
```

  
#### 129.0.6628.3 (`2024-8-1`) 
No browser API changes.

  
#### 129.0.6614.3 (`2024-7-26`) 
No browser API changes.

  
#### 128.0.6613.7 (`2024-7-24`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_128.0.6601.2_to_128.0.6613.7.diff), [json](./browser_apis/chrome-unstable_128.0.6601.2_to_128.0.6613.7.json), [full list](./browser_apis/chrome-unstable_128.0.6613.7.json))
 ```diff
--- ./browser_apis/chrome-unstable_128.0.6601.2.json	2024-07-25 01:02:47.278635965 +0000
+++ ./browser_apis/chrome-unstable_128.0.6613.7.json	2024-07-25 01:03:33.719104944 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8490,
+  "browserApiCount": 8491,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -194,6 +194,7 @@
     "AudioContext.prototype.createMediaStreamDestination",
     "AudioContext.prototype.createMediaStreamSource",
     "AudioContext.prototype.getOutputTimestamp",
+    "AudioContext.prototype.onerror",
     "AudioContext.prototype.onsinkchange",
     "AudioContext.prototype.outputLatency",
     "AudioContext.prototype.resume",
```

  
#### 128.0.6601.2 (`2024-7-18`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_128.0.6585.0_to_128.0.6601.2.diff), [json](./browser_apis/chrome-unstable_128.0.6585.0_to_128.0.6601.2.json), [full list](./browser_apis/chrome-unstable_128.0.6601.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_128.0.6585.0.json	2024-07-19 03:20:44.930557253 +0000
+++ ./browser_apis/chrome-unstable_128.0.6601.2.json	2024-07-19 03:21:13.994689931 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8487,
+  "browserApiCount": 8490,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2980,6 +2980,7 @@
     "Intl.Locale.prototype.caseFirst",
     "Intl.Locale.prototype.collation",
     "Intl.Locale.prototype.collations",
+    "Intl.Locale.prototype.firstDayOfWeek",
     "Intl.Locale.prototype.hourCycle",
     "Intl.Locale.prototype.hourCycles",
     "Intl.Locale.prototype.language",
@@ -4086,6 +4087,7 @@
     "Option.prototype.constructor.prototype.constructor.prototype.replaceChild",
     "Option.prototype.constructor.prototype.constructor.prototype.textContent",
     "Option.prototype.constructor.prototype.contentEditable",
+    "Option.prototype.constructor.prototype.currentCSSZoom",
     "Option.prototype.constructor.prototype.dataset",
     "Option.prototype.constructor.prototype.dir",
     "Option.prototype.constructor.prototype.draggable",
@@ -4704,6 +4706,7 @@
     "Promise.race",
     "Promise.reject",
     "Promise.resolve",
+    "Promise.try",
     "Promise.withResolvers",
     "PromiseRejectionEvent",
     "PromiseRejectionEvent.prototype",
```

  
#### 128.0.6585.0 (`2024-7-11`) ⚡
Added 5 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_128.0.6559.0_to_128.0.6585.0.diff), [json](./browser_apis/chrome-unstable_128.0.6559.0_to_128.0.6585.0.json), [full list](./browser_apis/chrome-unstable_128.0.6585.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_128.0.6559.0.json	2024-07-12 01:01:33.710870308 +0000
+++ ./browser_apis/chrome-unstable_128.0.6585.0.json	2024-07-12 01:02:02.286928097 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8482,
+  "browserApiCount": 8487,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1308,6 +1308,7 @@
     "ElementInternals.prototype.ariaChecked",
     "ElementInternals.prototype.ariaColCount",
     "ElementInternals.prototype.ariaColIndex",
+    "ElementInternals.prototype.ariaColIndexText",
     "ElementInternals.prototype.ariaColSpan",
     "ElementInternals.prototype.ariaCurrent",
     "ElementInternals.prototype.ariaDescription",
@@ -1333,6 +1334,7 @@
     "ElementInternals.prototype.ariaRoleDescription",
     "ElementInternals.prototype.ariaRowCount",
     "ElementInternals.prototype.ariaRowIndex",
+    "ElementInternals.prototype.ariaRowIndexText",
     "ElementInternals.prototype.ariaRowSpan",
     "ElementInternals.prototype.ariaSelected",
     "ElementInternals.prototype.ariaSetSize",
@@ -3992,6 +3994,7 @@
     "Option.prototype.constructor.prototype.ariaChecked",
     "Option.prototype.constructor.prototype.ariaColCount",
     "Option.prototype.constructor.prototype.ariaColIndex",
+    "Option.prototype.constructor.prototype.ariaColIndexText",
     "Option.prototype.constructor.prototype.ariaColSpan",
     "Option.prototype.constructor.prototype.ariaCurrent",
     "Option.prototype.constructor.prototype.ariaDescription",
@@ -4017,6 +4020,7 @@
     "Option.prototype.constructor.prototype.ariaRoleDescription",
     "Option.prototype.constructor.prototype.ariaRowCount",
     "Option.prototype.constructor.prototype.ariaRowIndex",
+    "Option.prototype.constructor.prototype.ariaRowIndexText",
     "Option.prototype.constructor.prototype.ariaRowSpan",
     "Option.prototype.constructor.prototype.ariaSelected",
     "Option.prototype.constructor.prototype.ariaSetSize",
@@ -4608,6 +4612,7 @@
     "PointerEvent.prototype.getPredictedEvents",
     "PointerEvent.prototype.height",
     "PointerEvent.prototype.isPrimary",
+    "PointerEvent.prototype.persistentDeviceId",
     "PointerEvent.prototype.pointerId",
     "PointerEvent.prototype.pointerType",
     "PointerEvent.prototype.pressure",
```

  
#### 128.0.6559.0 (`2024-6-27`) 
No browser API changes.

  
#### 128.0.6555.2 (`2024-6-25`) ⚡
Added 18 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_128.0.6535.2_to_128.0.6555.2.diff), [json](./browser_apis/chrome-unstable_128.0.6535.2_to_128.0.6555.2.json), [full list](./browser_apis/chrome-unstable_128.0.6555.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_128.0.6535.2.json	2024-06-26 01:00:35.066576712 +0000
+++ ./browser_apis/chrome-unstable_128.0.6555.2.json	2024-06-26 01:01:00.718881877 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8464,
+  "browserApiCount": 8482,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -902,6 +902,11 @@
     "CaptureController",
     "CaptureController.prototype",
     "CaptureController.prototype.setFocusBehavior",
+    "CaretPosition",
+    "CaretPosition.prototype",
+    "CaretPosition.prototype.getClientRect",
+    "CaretPosition.prototype.offset",
+    "CaretPosition.prototype.offsetNode",
     "ChannelMergerNode",
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
@@ -3647,14 +3652,21 @@
     "NavigationTransition.prototype.navigationType",
     "Navigator",
     "Navigator.prototype",
+    "Navigator.prototype.adAuctionComponents",
     "Navigator.prototype.appCodeName",
     "Navigator.prototype.appName",
     "Navigator.prototype.appVersion",
+    "Navigator.prototype.canLoadAdAuctionFencedFrame",
     "Navigator.prototype.clearAppBadge",
+    "Navigator.prototype.clearOriginJoinedAdInterestGroups",
     "Navigator.prototype.clipboard",
     "Navigator.prototype.connection",
     "Navigator.prototype.cookieEnabled",
+    "Navigator.prototype.createAuctionNonce",
     "Navigator.prototype.credentials",
+    "Navigator.prototype.deprecatedReplaceInURN",
+    "Navigator.prototype.deprecatedRunAdAuctionEnforcesKAnonymity",
+    "Navigator.prototype.deprecatedURNToURL",
     "Navigator.prototype.deviceMemory",
     "Navigator.prototype.doNotTrack",
     "Navigator.prototype.geolocation",
@@ -3667,9 +3679,11 @@
     "Navigator.prototype.hid",
     "Navigator.prototype.ink",
     "Navigator.prototype.javaEnabled",
+    "Navigator.prototype.joinAdInterestGroup",
     "Navigator.prototype.keyboard",
     "Navigator.prototype.language",
     "Navigator.prototype.languages",
+    "Navigator.prototype.leaveAdInterestGroup",
     "Navigator.prototype.locks",
     "Navigator.prototype.login",
     "Navigator.prototype.managed",
@@ -3686,9 +3700,11 @@
     "Navigator.prototype.presentation",
     "Navigator.prototype.product",
     "Navigator.prototype.productSub",
+    "Navigator.prototype.protectedAudience",
     "Navigator.prototype.registerProtocolHandler",
     "Navigator.prototype.requestMIDIAccess",
     "Navigator.prototype.requestMediaKeySystemAccess",
+    "Navigator.prototype.runAdAuction",
     "Navigator.prototype.scheduling",
     "Navigator.prototype.sendBeacon",
     "Navigator.prototype.serial",
@@ -3697,6 +3713,7 @@
     "Navigator.prototype.storage",
     "Navigator.prototype.storageBuckets",
     "Navigator.prototype.unregisterProtocolHandler",
+    "Navigator.prototype.updateAdInterestGroups",
     "Navigator.prototype.usb",
     "Navigator.prototype.userActivation",
     "Navigator.prototype.userAgent",
@@ -7585,6 +7602,7 @@
     "XMLDocument.prototype.body",
     "XMLDocument.prototype.browsingTopics",
     "XMLDocument.prototype.captureEvents",
+    "XMLDocument.prototype.caretPositionFromPoint",
     "XMLDocument.prototype.caretRangeFromPoint",
     "XMLDocument.prototype.characterSet",
     "XMLDocument.prototype.charset",
```

  
#### 128.0.6535.2 (`2024-6-14`) 
No browser API changes.

  
#### 127.0.6523.4 (`2024-6-8`) ⚡
Added 7 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_127.0.6510.4_to_127.0.6523.4.diff), [json](./browser_apis/chrome-unstable_127.0.6510.4_to_127.0.6523.4.json), [full list](./browser_apis/chrome-unstable_127.0.6523.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_127.0.6510.4.json	2024-06-08 00:59:33.514707854 +0000
+++ ./browser_apis/chrome-unstable_127.0.6523.4.json	2024-06-08 00:59:55.998831146 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8457,
+  "browserApiCount": 8464,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -906,6 +906,11 @@
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
     "ChannelSplitterNode.prototype",
+    "ChapterInformation",
+    "ChapterInformation.prototype",
+    "ChapterInformation.prototype.artwork",
+    "ChapterInformation.prototype.startTime",
+    "ChapterInformation.prototype.title",
     "CharacterBoundsUpdateEvent",
     "CharacterBoundsUpdateEvent.prototype",
     "CharacterBoundsUpdateEvent.prototype.rangeEnd",
@@ -1540,6 +1545,7 @@
     "GPUAdapter",
     "GPUAdapter.prototype",
     "GPUAdapter.prototype.features",
+    "GPUAdapter.prototype.info",
     "GPUAdapter.prototype.isFallbackAdapter",
     "GPUAdapter.prototype.limits",
     "GPUAdapter.prototype.requestAdapterInfo",
@@ -3394,6 +3400,7 @@
     "MediaMetadata.prototype.album",
     "MediaMetadata.prototype.artist",
     "MediaMetadata.prototype.artwork",
+    "MediaMetadata.prototype.chapterInfo",
     "MediaMetadata.prototype.title",
     "MediaQueryList",
     "MediaQueryList.prototype",
```

  
#### 127.0.6510.4 (`2024-5-31`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_127.0.6485.0_to_127.0.6510.4.diff), [json](./browser_apis/chrome-unstable_127.0.6485.0_to_127.0.6510.4.json), [full list](./browser_apis/chrome-unstable_127.0.6510.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_127.0.6485.0.json	2024-06-01 12:23:03.167185305 +0000
+++ ./browser_apis/chrome-unstable_127.0.6510.4.json	2024-06-01 12:23:31.239369681 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8454,
+  "browserApiCount": 8457,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -4680,6 +4680,9 @@
     "PromiseRejectionEvent.prototype",
     "PromiseRejectionEvent.prototype.promise",
     "PromiseRejectionEvent.prototype.reason",
+    "ProtectedAudience",
+    "ProtectedAudience.prototype",
+    "ProtectedAudience.prototype.queryFeatureSupport",
     "Proxy",
     "Proxy.revocable",
     "PublicKeyCredential",
```

  
#### 127.0.6485.0 (`2024-5-20`) 
No browser API changes.

  
#### 126.0.6468.2 (`2024-5-14`) ⚡
Added 51 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_126.0.6452.3_to_126.0.6468.2.diff), [json](./browser_apis/chrome-unstable_126.0.6452.3_to_126.0.6468.2.json), [full list](./browser_apis/chrome-unstable_126.0.6468.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_126.0.6452.3.json	2024-05-14 12:24:35.581318320 +0000
+++ ./browser_apis/chrome-unstable_126.0.6468.2.json	2024-05-14 12:24:57.933362882 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8403,
+  "browserApiCount": 8454,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -795,6 +795,10 @@
     "CSSVariableReferenceValue.prototype",
     "CSSVariableReferenceValue.prototype.fallback",
     "CSSVariableReferenceValue.prototype.variable",
+    "CSSViewTransitionRule",
+    "CSSViewTransitionRule.prototype",
+    "CSSViewTransitionRule.prototype.navigation",
+    "CSSViewTransitionRule.prototype.types",
     "Cache",
     "Cache.prototype",
     "Cache.prototype.add",
@@ -925,6 +929,13 @@
     "CloseEvent.prototype.code",
     "CloseEvent.prototype.reason",
     "CloseEvent.prototype.wasClean",
+    "CloseWatcher",
+    "CloseWatcher.prototype",
+    "CloseWatcher.prototype.close",
+    "CloseWatcher.prototype.destroy",
+    "CloseWatcher.prototype.oncancel",
+    "CloseWatcher.prototype.onclose",
+    "CloseWatcher.prototype.requestClose",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -1396,6 +1407,16 @@
     "FederatedCredential.prototype.name",
     "FederatedCredential.prototype.protocol",
     "FederatedCredential.prototype.provider",
+    "Fence",
+    "Fence.prototype",
+    "Fence.prototype.getNestedConfigs",
+    "Fence.prototype.reportEvent",
+    "Fence.prototype.setReportEventDataForAutomaticBeacons",
+    "FencedFrameConfig",
+    "FencedFrameConfig.prototype",
+    "FencedFrameConfig.prototype.height",
+    "FencedFrameConfig.prototype.setSharedStorageContext",
+    "FencedFrameConfig.prototype.width",
     "File",
     "File.prototype",
     "File.prototype.arrayBuffer",
@@ -2024,6 +2045,14 @@
     "HTMLEmbedElement.prototype.src",
     "HTMLEmbedElement.prototype.type",
     "HTMLEmbedElement.prototype.width",
+    "HTMLFencedFrameElement",
+    "HTMLFencedFrameElement.canLoadOpaqueURL",
+    "HTMLFencedFrameElement.prototype",
+    "HTMLFencedFrameElement.prototype.allow",
+    "HTMLFencedFrameElement.prototype.config",
+    "HTMLFencedFrameElement.prototype.height",
+    "HTMLFencedFrameElement.prototype.sandbox",
+    "HTMLFencedFrameElement.prototype.width",
     "HTMLFieldSetElement",
     "HTMLFieldSetElement.prototype",
     "HTMLFieldSetElement.prototype.checkValidity",
@@ -2125,6 +2154,7 @@
     "HTMLIFrameElement.prototype.allow",
     "HTMLIFrameElement.prototype.allowFullscreen",
     "HTMLIFrameElement.prototype.allowPaymentRequest",
+    "HTMLIFrameElement.prototype.browsingTopics",
     "HTMLIFrameElement.prototype.contentDocument",
     "HTMLIFrameElement.prototype.contentWindow",
     "HTMLIFrameElement.prototype.credentialless",
@@ -4255,9 +4285,11 @@
     "OverconstrainedError.prototype.constraint",
     "PageRevealEvent",
     "PageRevealEvent.prototype",
+    "PageRevealEvent.prototype.viewTransition",
     "PageSwapEvent",
     "PageSwapEvent.prototype",
     "PageSwapEvent.prototype.activation",
+    "PageSwapEvent.prototype.viewTransition",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -6037,6 +6069,22 @@
     "ShadowRoot.prototype.setHTMLUnsafe",
     "ShadowRoot.prototype.slotAssignment",
     "ShadowRoot.prototype.styleSheets",
+    "SharedStorage",
+    "SharedStorage.prototype",
+    "SharedStorage.prototype.append",
+    "SharedStorage.prototype.clear",
+    "SharedStorage.prototype.createWorklet",
+    "SharedStorage.prototype.delete",
+    "SharedStorage.prototype.get",
+    "SharedStorage.prototype.run",
+    "SharedStorage.prototype.selectURL",
+    "SharedStorage.prototype.set",
+    "SharedStorage.prototype.worklet",
+    "SharedStorageWorklet",
+    "SharedStorageWorklet.prototype",
+    "SharedStorageWorklet.prototype.addModule",
+    "SharedStorageWorklet.prototype.run",
+    "SharedStorageWorklet.prototype.selectURL",
     "SharedWorker",
     "SharedWorker.prototype",
     "SharedWorker.prototype.onerror",
@@ -7525,6 +7573,7 @@
     "XMLDocument.prototype.applets",
     "XMLDocument.prototype.bgColor",
     "XMLDocument.prototype.body",
+    "XMLDocument.prototype.browsingTopics",
     "XMLDocument.prototype.captureEvents",
     "XMLDocument.prototype.caretRangeFromPoint",
     "XMLDocument.prototype.characterSet",
@@ -8079,6 +8128,7 @@
     "eval",
     "event",
     "external",
+    "fence",
     "fetch",
     "find",
     "focus",
@@ -8264,6 +8314,7 @@
     "sessionStorage",
     "setInterval",
     "setTimeout",
+    "sharedStorage",
     "showDirectoryPicker",
     "showOpenFilePicker",
     "showSaveFilePicker",
```

  
#### 126.0.6452.3 (`2024-5-3`) ⚡
Added 3 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_126.0.6439.0_to_126.0.6452.3.diff), [json](./browser_apis/chrome-unstable_126.0.6439.0_to_126.0.6452.3.json), [full list](./browser_apis/chrome-unstable_126.0.6452.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_126.0.6439.0.json	2024-05-04 00:55:53.194510891 +0000
+++ ./browser_apis/chrome-unstable_126.0.6452.3.json	2024-05-04 00:56:23.778423387 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8401,
+  "browserApiCount": 8403,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -4606,12 +4606,12 @@
     "PresentationRequest.prototype.reconnect",
     "PresentationRequest.prototype.start",
     "PressureObserver",
+    "PressureObserver.knownSources",
     "PressureObserver.prototype",
     "PressureObserver.prototype.disconnect",
     "PressureObserver.prototype.observe",
     "PressureObserver.prototype.takeRecords",
     "PressureObserver.prototype.unobserve",
-    "PressureObserver.supportedSources",
     "PressureRecord",
     "PressureRecord.prototype",
     "PressureRecord.prototype.source",
@@ -6790,6 +6790,7 @@
     "VisualViewport.prototype.offsetTop",
     "VisualViewport.prototype.onresize",
     "VisualViewport.prototype.onscroll",
+    "VisualViewport.prototype.onscrollend",
     "VisualViewport.prototype.pageLeft",
     "VisualViewport.prototype.pageTop",
     "VisualViewport.prototype.scale",
@@ -8386,6 +8387,7 @@
     "webkitURL",
     "webkitURL.canParse",
     "webkitURL.createObjectURL",
+    "webkitURL.parse",
     "webkitURL.prototype",
     "webkitURL.prototype.hash",
     "webkitURL.prototype.host",
```

  
#### 126.0.6439.0 (`2024-4-26`) ⚡
Added 4 APIs, removed 6 (see: [diff](./browser_apis/chrome-unstable_126.0.6423.2_to_126.0.6439.0.diff), [json](./browser_apis/chrome-unstable_126.0.6423.2_to_126.0.6439.0.json), [full list](./browser_apis/chrome-unstable_126.0.6439.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_126.0.6423.2.json	2024-04-27 00:55:06.328040949 +0000
+++ ./browser_apis/chrome-unstable_126.0.6439.0.json	2024-04-27 00:55:41.028215193 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8403,
+  "browserApiCount": 8401,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1799,6 +1799,7 @@
     "GamepadEvent.prototype.gamepad",
     "GamepadHapticActuator",
     "GamepadHapticActuator.prototype",
+    "GamepadHapticActuator.prototype.effects",
     "GamepadHapticActuator.prototype.playEffect",
     "GamepadHapticActuator.prototype.reset",
     "GamepadHapticActuator.prototype.type",
@@ -1816,10 +1817,12 @@
     "GeolocationCoordinates.prototype.latitude",
     "GeolocationCoordinates.prototype.longitude",
     "GeolocationCoordinates.prototype.speed",
+    "GeolocationCoordinates.prototype.toJSON",
     "GeolocationPosition",
     "GeolocationPosition.prototype",
     "GeolocationPosition.prototype.coords",
     "GeolocationPosition.prototype.timestamp",
+    "GeolocationPosition.prototype.toJSON",
     "GeolocationPositionError",
     "GeolocationPositionError.prototype",
     "GeolocationPositionError.prototype.code",
@@ -2584,13 +2587,7 @@
     "HTMLVideoElement.prototype.videoHeight",
     "HTMLVideoElement.prototype.videoWidth",
     "HTMLVideoElement.prototype.webkitDecodedFrameCount",
-    "HTMLVideoElement.prototype.webkitDisplayingFullscreen",
     "HTMLVideoElement.prototype.webkitDroppedFrameCount",
-    "HTMLVideoElement.prototype.webkitEnterFullScreen",
-    "HTMLVideoElement.prototype.webkitEnterFullscreen",
-    "HTMLVideoElement.prototype.webkitExitFullScreen",
-    "HTMLVideoElement.prototype.webkitExitFullscreen",
-    "HTMLVideoElement.prototype.webkitSupportsFullscreen",
     "HTMLVideoElement.prototype.width",
     "HashChangeEvent",
     "HashChangeEvent.prototype",
@@ -7299,6 +7296,7 @@
     "WebGLUniformLocation.prototype",
     "WebGLVertexArrayObject",
     "WebGLVertexArrayObject.prototype",
+    "WebGLVertexArrayObject.prototype.constructor",
     "WebKitCSSMatrix",
     "WebKitCSSMatrix.fromFloat32Array",
     "WebKitCSSMatrix.fromFloat64Array",
```

  
#### 126.0.6423.2 (`2024-4-19`) ⚡
Added 72 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_125.0.6420.3_to_126.0.6423.2.diff), [json](./browser_apis/chrome-unstable_125.0.6420.3_to_126.0.6423.2.json), [full list](./browser_apis/chrome-unstable_126.0.6423.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_125.0.6420.3.json	2024-04-20 00:55:14.708492039 +0000
+++ ./browser_apis/chrome-unstable_126.0.6423.2.json	2024-04-20 00:55:50.496592891 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8331,
+  "browserApiCount": 8403,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -566,6 +566,78 @@
     "CSSPerspective",
     "CSSPerspective.prototype",
     "CSSPerspective.prototype.length",
+    "CSSPositionTryDescriptors",
+    "CSSPositionTryDescriptors.prototype",
+    "CSSPositionTryDescriptors.prototype.align-self",
+    "CSSPositionTryDescriptors.prototype.alignSelf",
+    "CSSPositionTryDescriptors.prototype.block-size",
+    "CSSPositionTryDescriptors.prototype.blockSize",
+    "CSSPositionTryDescriptors.prototype.bottom",
+    "CSSPositionTryDescriptors.prototype.height",
+    "CSSPositionTryDescriptors.prototype.inline-size",
+    "CSSPositionTryDescriptors.prototype.inlineSize",
+    "CSSPositionTryDescriptors.prototype.inset",
+    "CSSPositionTryDescriptors.prototype.inset-area",
+    "CSSPositionTryDescriptors.prototype.inset-block",
+    "CSSPositionTryDescriptors.prototype.inset-block-end",
+    "CSSPositionTryDescriptors.prototype.inset-block-start",
+    "CSSPositionTryDescriptors.prototype.inset-inline",
+    "CSSPositionTryDescriptors.prototype.inset-inline-end",
+    "CSSPositionTryDescriptors.prototype.inset-inline-start",
+    "CSSPositionTryDescriptors.prototype.insetArea",
+    "CSSPositionTryDescriptors.prototype.insetBlock",
+    "CSSPositionTryDescriptors.prototype.insetBlockEnd",
+    "CSSPositionTryDescriptors.prototype.insetBlockStart",
+    "CSSPositionTryDescriptors.prototype.insetInline",
+    "CSSPositionTryDescriptors.prototype.insetInlineEnd",
+    "CSSPositionTryDescriptors.prototype.insetInlineStart",
+    "CSSPositionTryDescriptors.prototype.justify-self",
+    "CSSPositionTryDescriptors.prototype.justifySelf",
+    "CSSPositionTryDescriptors.prototype.left",
+    "CSSPositionTryDescriptors.prototype.margin",
+    "CSSPositionTryDescriptors.prototype.margin-block",
+    "CSSPositionTryDescriptors.prototype.margin-block-end",
+    "CSSPositionTryDescriptors.prototype.margin-block-start",
+    "CSSPositionTryDescriptors.prototype.margin-bottom",
+    "CSSPositionTryDescriptors.prototype.margin-inline",
+    "CSSPositionTryDescriptors.prototype.margin-inline-end",
+    "CSSPositionTryDescriptors.prototype.margin-inline-start",
+    "CSSPositionTryDescriptors.prototype.margin-left",
+    "CSSPositionTryDescriptors.prototype.margin-right",
+    "CSSPositionTryDescriptors.prototype.margin-top",
+    "CSSPositionTryDescriptors.prototype.marginBlock",
+    "CSSPositionTryDescriptors.prototype.marginBlockEnd",
+    "CSSPositionTryDescriptors.prototype.marginBlockStart",
+    "CSSPositionTryDescriptors.prototype.marginBottom",
+    "CSSPositionTryDescriptors.prototype.marginInline",
+    "CSSPositionTryDescriptors.prototype.marginInlineEnd",
+    "CSSPositionTryDescriptors.prototype.marginInlineStart",
+    "CSSPositionTryDescriptors.prototype.marginLeft",
+    "CSSPositionTryDescriptors.prototype.marginRight",
+    "CSSPositionTryDescriptors.prototype.marginTop",
+    "CSSPositionTryDescriptors.prototype.max-block-size",
+    "CSSPositionTryDescriptors.prototype.max-height",
+    "CSSPositionTryDescriptors.prototype.max-inline-size",
+    "CSSPositionTryDescriptors.prototype.max-width",
+    "CSSPositionTryDescriptors.prototype.maxBlockSize",
+    "CSSPositionTryDescriptors.prototype.maxHeight",
+    "CSSPositionTryDescriptors.prototype.maxInlineSize",
+    "CSSPositionTryDescriptors.prototype.maxWidth",
+    "CSSPositionTryDescriptors.prototype.min-block-size",
+    "CSSPositionTryDescriptors.prototype.min-height",
+    "CSSPositionTryDescriptors.prototype.min-inline-size",
+    "CSSPositionTryDescriptors.prototype.min-width",
+    "CSSPositionTryDescriptors.prototype.minBlockSize",
+    "CSSPositionTryDescriptors.prototype.minHeight",
+    "CSSPositionTryDescriptors.prototype.minInlineSize",
+    "CSSPositionTryDescriptors.prototype.minWidth",
+    "CSSPositionTryDescriptors.prototype.place-self",
+    "CSSPositionTryDescriptors.prototype.placeSelf",
+    "CSSPositionTryDescriptors.prototype.position-anchor",
+    "CSSPositionTryDescriptors.prototype.positionAnchor",
+    "CSSPositionTryDescriptors.prototype.right",
+    "CSSPositionTryDescriptors.prototype.top",
+    "CSSPositionTryDescriptors.prototype.width",
     "CSSPositionTryRule",
     "CSSPositionTryRule.prototype",
     "CSSPositionTryRule.prototype.name",
```

  
#### 125.0.6420.3 (`2024-4-16`) ⚡
Added 51 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_125.0.6396.3_to_125.0.6420.3.diff), [json](./browser_apis/chrome-unstable_125.0.6396.3_to_125.0.6420.3.json), [full list](./browser_apis/chrome-unstable_125.0.6420.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_125.0.6396.3.json	2024-04-17 00:55:26.405796222 +0000
+++ ./browser_apis/chrome-unstable_125.0.6420.3.json	2024-04-17 00:56:02.414092940 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8280,
+  "browserApiCount": 8331,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -566,6 +566,10 @@
     "CSSPerspective",
     "CSSPerspective.prototype",
     "CSSPerspective.prototype.length",
+    "CSSPositionTryRule",
+    "CSSPositionTryRule.prototype",
+    "CSSPositionTryRule.prototype.name",
+    "CSSPositionTryRule.prototype.style",
     "CSSPositionValue",
     "CSSPositionValue.prototype",
     "CSSPositionValue.prototype.x",
@@ -1790,6 +1794,7 @@
     "HTMLAllCollection.prototype.namedItem",
     "HTMLAnchorElement",
     "HTMLAnchorElement.prototype",
+    "HTMLAnchorElement.prototype.attributionSrc",
     "HTMLAnchorElement.prototype.charset",
     "HTMLAnchorElement.prototype.coords",
     "HTMLAnchorElement.prototype.download",
@@ -2292,6 +2297,7 @@
     "HTMLScriptElement",
     "HTMLScriptElement.prototype",
     "HTMLScriptElement.prototype.async",
+    "HTMLScriptElement.prototype.attributionSrc",
     "HTMLScriptElement.prototype.blocking",
     "HTMLScriptElement.prototype.charset",
     "HTMLScriptElement.prototype.crossOrigin",
@@ -2437,6 +2443,7 @@
     "HTMLTemplateElement.prototype.shadowRootClonable",
     "HTMLTemplateElement.prototype.shadowRootDelegatesFocus",
     "HTMLTemplateElement.prototype.shadowRootMode",
+    "HTMLTemplateElement.prototype.shadowRootSerializable",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
     "HTMLTextAreaElement.prototype.autocomplete",
@@ -2706,6 +2713,7 @@
     "Image.prototype",
     "Image.prototype.align",
     "Image.prototype.alt",
+    "Image.prototype.attributionSrc",
     "Image.prototype.border",
     "Image.prototype.complete",
     "Image.prototype.constructor",
@@ -3354,6 +3362,18 @@
     "MediaStreamEvent",
     "MediaStreamEvent.prototype",
     "MediaStreamEvent.prototype.stream",
+    "MediaStreamTrackAudioStats",
+    "MediaStreamTrackAudioStats.prototype",
+    "MediaStreamTrackAudioStats.prototype.averageLatency",
+    "MediaStreamTrackAudioStats.prototype.deliveredFrames",
+    "MediaStreamTrackAudioStats.prototype.deliveredFramesDuration",
+    "MediaStreamTrackAudioStats.prototype.latency",
+    "MediaStreamTrackAudioStats.prototype.maximumLatency",
+    "MediaStreamTrackAudioStats.prototype.minimumLatency",
+    "MediaStreamTrackAudioStats.prototype.resetLatency",
+    "MediaStreamTrackAudioStats.prototype.toJSON",
+    "MediaStreamTrackAudioStats.prototype.totalFrames",
+    "MediaStreamTrackAudioStats.prototype.totalFramesDuration",
     "MediaStreamTrackEvent",
     "MediaStreamTrackEvent.prototype",
     "MediaStreamTrackEvent.prototype.track",
@@ -3618,6 +3638,19 @@
     "NodeIterator.prototype.referenceNode",
     "NodeIterator.prototype.root",
     "NodeIterator.prototype.whatToShow",
+    "NotRestoredReasonDetails",
+    "NotRestoredReasonDetails.prototype",
+    "NotRestoredReasonDetails.prototype.reason",
+    "NotRestoredReasonDetails.prototype.toJSON",
+    "NotRestoredReasons",
+    "NotRestoredReasons.prototype",
+    "NotRestoredReasons.prototype.children",
+    "NotRestoredReasons.prototype.id",
+    "NotRestoredReasons.prototype.name",
+    "NotRestoredReasons.prototype.reasons",
+    "NotRestoredReasons.prototype.src",
+    "NotRestoredReasons.prototype.toJSON",
+    "NotRestoredReasons.prototype.url",
     "Notification",
     "Notification.maxActions",
     "Notification.permission",
@@ -3945,6 +3978,7 @@
     "Option.prototype.constructor.prototype.getElementsByClassName",
     "Option.prototype.constructor.prototype.getElementsByTagName",
     "Option.prototype.constructor.prototype.getElementsByTagNameNS",
+    "Option.prototype.constructor.prototype.getHTML",
     "Option.prototype.constructor.prototype.getInnerHTML",
     "Option.prototype.constructor.prototype.hasAttribute",
     "Option.prototype.constructor.prototype.hasAttributeNS",
@@ -4317,6 +4351,7 @@
     "PerformanceNavigationTiming.prototype.domInteractive",
     "PerformanceNavigationTiming.prototype.loadEventEnd",
     "PerformanceNavigationTiming.prototype.loadEventStart",
+    "PerformanceNavigationTiming.prototype.notRestoredReasons",
     "PerformanceNavigationTiming.prototype.redirectCount",
     "PerformanceNavigationTiming.prototype.toJSON",
     "PerformanceNavigationTiming.prototype.type",
@@ -5915,6 +5950,7 @@
     "ShadowRoot.prototype.fullscreenElement",
     "ShadowRoot.prototype.getAnimations",
     "ShadowRoot.prototype.getElementById",
+    "ShadowRoot.prototype.getHTML",
     "ShadowRoot.prototype.getInnerHTML",
     "ShadowRoot.prototype.getSelection",
     "ShadowRoot.prototype.host",
@@ -5928,6 +5964,7 @@
     "ShadowRoot.prototype.querySelector",
     "ShadowRoot.prototype.querySelectorAll",
     "ShadowRoot.prototype.replaceChildren",
+    "ShadowRoot.prototype.serializable",
     "ShadowRoot.prototype.setHTMLUnsafe",
     "ShadowRoot.prototype.slotAssignment",
     "ShadowRoot.prototype.styleSheets",
@@ -6647,7 +6684,19 @@
     "ViewTransition.prototype.finished",
     "ViewTransition.prototype.ready",
     "ViewTransition.prototype.skipTransition",
+    "ViewTransition.prototype.types",
     "ViewTransition.prototype.updateCallbackDone",
+    "ViewTransitionTypeSet",
+    "ViewTransitionTypeSet.prototype",
+    "ViewTransitionTypeSet.prototype.add",
+    "ViewTransitionTypeSet.prototype.clear",
+    "ViewTransitionTypeSet.prototype.delete",
+    "ViewTransitionTypeSet.prototype.entries",
+    "ViewTransitionTypeSet.prototype.forEach",
+    "ViewTransitionTypeSet.prototype.has",
+    "ViewTransitionTypeSet.prototype.keys",
+    "ViewTransitionTypeSet.prototype.size",
+    "ViewTransitionTypeSet.prototype.values",
     "VirtualKeyboard",
     "VirtualKeyboard.prototype",
     "VirtualKeyboard.prototype.boundingRect",
@@ -7469,6 +7518,7 @@
     "XMLDocument.prototype.hasPrivateToken",
     "XMLDocument.prototype.hasRedemptionRecord",
     "XMLDocument.prototype.hasStorageAccess",
+    "XMLDocument.prototype.hasUnpartitionedCookieAccess",
     "XMLDocument.prototype.head",
     "XMLDocument.prototype.hidden",
     "XMLDocument.prototype.images",
@@ -7650,6 +7700,7 @@
     "XMLHttpRequest.prototype.responseURL",
     "XMLHttpRequest.prototype.responseXML",
     "XMLHttpRequest.prototype.send",
+    "XMLHttpRequest.prototype.setAttributionReporting",
     "XMLHttpRequest.prototype.setPrivateToken",
     "XMLHttpRequest.prototype.setRequestHeader",
     "XMLHttpRequest.prototype.status",
```

  
#### 125.0.6396.3 (`2024-4-5`) 
No browser API changes.

  
#### 125.0.6382.3 (`2024-3-28`) ⚡
Added 13 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_125.0.6368.2_to_125.0.6382.3.diff), [json](./browser_apis/chrome-unstable_125.0.6368.2_to_125.0.6382.3.json), [full list](./browser_apis/chrome-unstable_125.0.6382.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_125.0.6368.2.json	2024-03-29 00:54:27.290156055 +0000
+++ ./browser_apis/chrome-unstable_125.0.6382.3.json	2024-03-29 00:54:45.858534444 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8267,
+  "browserApiCount": 8280,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -4501,6 +4501,19 @@
     "PresentationRequest.prototype.onconnectionavailable",
     "PresentationRequest.prototype.reconnect",
     "PresentationRequest.prototype.start",
+    "PressureObserver",
+    "PressureObserver.prototype",
+    "PressureObserver.prototype.disconnect",
+    "PressureObserver.prototype.observe",
+    "PressureObserver.prototype.takeRecords",
+    "PressureObserver.prototype.unobserve",
+    "PressureObserver.supportedSources",
+    "PressureRecord",
+    "PressureRecord.prototype",
+    "PressureRecord.prototype.source",
+    "PressureRecord.prototype.state",
+    "PressureRecord.prototype.time",
+    "PressureRecord.prototype.toJSON",
     "ProcessingInstruction",
     "ProcessingInstruction.prototype",
     "ProcessingInstruction.prototype.sheet",
```

  
#### 125.0.6368.2 (`2024-3-21`) ⚡
Added 5 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_124.0.6356.2_to_125.0.6368.2.diff), [json](./browser_apis/chrome-unstable_124.0.6356.2_to_125.0.6368.2.json), [full list](./browser_apis/chrome-unstable_125.0.6368.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_124.0.6356.2.json	2024-03-22 00:53:41.025251367 +0000
+++ ./browser_apis/chrome-unstable_125.0.6368.2.json	2024-03-22 00:54:17.069251129 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8262,
+  "browserApiCount": 8267,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -4128,6 +4128,7 @@
     "Option.prototype.constructor.prototype.webkitMatchesSelector",
     "Option.prototype.constructor.prototype.webkitRequestFullScreen",
     "Option.prototype.constructor.prototype.webkitRequestFullscreen",
+    "Option.prototype.constructor.prototype.writingSuggestions",
     "Option.prototype.defaultSelected",
     "Option.prototype.disabled",
     "Option.prototype.form",
@@ -4151,6 +4152,9 @@
     "OverconstrainedError.prototype.constraint",
     "PageRevealEvent",
     "PageRevealEvent.prototype",
+    "PageSwapEvent",
+    "PageSwapEvent.prototype",
+    "PageSwapEvent.prototype.activation",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -8039,6 +8043,7 @@
     "onpagehide",
     "onpagereveal",
     "onpageshow",
+    "onpageswap",
     "onpause",
     "onplay",
     "onplaying",
```

  
#### 124.0.6356.2 (`2024-3-14`) ⚡
Added 10 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_124.0.6342.3_to_124.0.6356.2.diff), [json](./browser_apis/chrome-unstable_124.0.6342.3_to_124.0.6356.2.json), [full list](./browser_apis/chrome-unstable_124.0.6356.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_124.0.6342.3.json	2024-03-15 00:54:08.148994999 +0000
+++ ./browser_apis/chrome-unstable_124.0.6356.2.json	2024-03-15 00:54:43.724747284 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8252,
+  "browserApiCount": 8262,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -7243,6 +7243,16 @@
     "WebSocket.prototype.readyState",
     "WebSocket.prototype.send",
     "WebSocket.prototype.url",
+    "WebSocketError",
+    "WebSocketError.prototype",
+    "WebSocketError.prototype.closeCode",
+    "WebSocketError.prototype.reason",
+    "WebSocketStream",
+    "WebSocketStream.prototype",
+    "WebSocketStream.prototype.close",
+    "WebSocketStream.prototype.closed",
+    "WebSocketStream.prototype.opened",
+    "WebSocketStream.prototype.url",
     "WebTransport",
     "WebTransport.prototype",
     "WebTransport.prototype.close",
```

  
#### 124.0.6342.3 (`2024-3-8`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_124.0.6329.0_to_124.0.6342.3.diff), [json](./browser_apis/chrome-unstable_124.0.6329.0_to_124.0.6342.3.json), [full list](./browser_apis/chrome-unstable_124.0.6342.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_124.0.6329.0.json	2024-03-09 00:51:35.591963008 +0000
+++ ./browser_apis/chrome-unstable_124.0.6342.3.json	2024-03-09 00:52:06.492211365 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8249,
+  "browserApiCount": 8252,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2062,6 +2062,7 @@
     "HTMLIFrameElement.prototype.referrerPolicy",
     "HTMLIFrameElement.prototype.sandbox",
     "HTMLIFrameElement.prototype.scrolling",
+    "HTMLIFrameElement.prototype.sharedStorageWritable",
     "HTMLIFrameElement.prototype.src",
     "HTMLIFrameElement.prototype.srcdoc",
     "HTMLIFrameElement.prototype.width",
@@ -2723,6 +2724,7 @@
     "Image.prototype.naturalHeight",
     "Image.prototype.naturalWidth",
     "Image.prototype.referrerPolicy",
+    "Image.prototype.sharedStorageWritable",
     "Image.prototype.sizes",
     "Image.prototype.src",
     "Image.prototype.srcset",
@@ -4786,6 +4788,7 @@
     "ReadableStream.prototype.pipeThrough",
     "ReadableStream.prototype.pipeTo",
     "ReadableStream.prototype.tee",
+    "ReadableStream.prototype.values",
     "ReadableStreamBYOBReader",
     "ReadableStreamBYOBReader.prototype",
     "ReadableStreamBYOBReader.prototype.cancel",
```

  
#### 124.0.6329.0 (`2024-3-4`) ⚡
Added 7 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_124.0.6315.2_to_124.0.6329.0.diff), [json](./browser_apis/chrome-unstable_124.0.6315.2_to_124.0.6329.0.json), [full list](./browser_apis/chrome-unstable_124.0.6329.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_124.0.6315.2.json	2024-03-05 00:53:14.497113588 +0000
+++ ./browser_apis/chrome-unstable_124.0.6329.0.json	2024-03-05 00:53:48.257216749 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8242,
+  "browserApiCount": 8249,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2433,6 +2433,7 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
+    "HTMLTemplateElement.prototype.shadowRootClonable",
     "HTMLTemplateElement.prototype.shadowRootDelegatesFocus",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
@@ -4108,6 +4109,7 @@
     "Option.prototype.constructor.prototype.setAttributeNS",
     "Option.prototype.constructor.prototype.setAttributeNode",
     "Option.prototype.constructor.prototype.setAttributeNodeNS",
+    "Option.prototype.constructor.prototype.setHTMLUnsafe",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
     "Option.prototype.constructor.prototype.showPopover",
@@ -4635,11 +4637,13 @@
     "RTCIceCandidate.prototype.protocol",
     "RTCIceCandidate.prototype.relatedAddress",
     "RTCIceCandidate.prototype.relatedPort",
+    "RTCIceCandidate.prototype.relayProtocol",
     "RTCIceCandidate.prototype.sdpMLineIndex",
     "RTCIceCandidate.prototype.sdpMid",
     "RTCIceCandidate.prototype.tcpType",
     "RTCIceCandidate.prototype.toJSON",
     "RTCIceCandidate.prototype.type",
+    "RTCIceCandidate.prototype.url",
     "RTCIceCandidate.prototype.usernameFragment",
     "RTCIceTransport",
     "RTCIceTransport.prototype",
@@ -5882,6 +5886,7 @@
     "ShadowRoot.prototype.append",
     "ShadowRoot.prototype.childElementCount",
     "ShadowRoot.prototype.children",
+    "ShadowRoot.prototype.clonable",
     "ShadowRoot.prototype.constructor",
     "ShadowRoot.prototype.delegatesFocus",
     "ShadowRoot.prototype.elementFromPoint",
@@ -5903,6 +5908,7 @@
     "ShadowRoot.prototype.querySelector",
     "ShadowRoot.prototype.querySelectorAll",
     "ShadowRoot.prototype.replaceChildren",
+    "ShadowRoot.prototype.setHTMLUnsafe",
     "ShadowRoot.prototype.slotAssignment",
     "ShadowRoot.prototype.styleSheets",
     "SharedWorker",
@@ -7379,6 +7385,7 @@
     "XMLDocument.prototype.close",
     "XMLDocument.prototype.compatMode",
     "XMLDocument.prototype.constructor",
+    "XMLDocument.prototype.constructor.parseHTMLUnsafe",
     "XMLDocument.prototype.contentType",
     "XMLDocument.prototype.cookie",
     "XMLDocument.prototype.createAttribute",
```

  
#### 124.0.6315.2 (`2024-2-23`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_123.0.6300.3_to_124.0.6315.2.diff), [json](./browser_apis/chrome-unstable_123.0.6300.3_to_124.0.6315.2.json), [full list](./browser_apis/chrome-unstable_124.0.6315.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_123.0.6300.3.json	2024-02-24 00:51:11.537165991 +0000
+++ ./browser_apis/chrome-unstable_124.0.6315.2.json	2024-02-24 00:51:38.648970394 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8238,
+  "browserApiCount": 8242,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -509,6 +509,7 @@
     "CSSKeyframesRule.prototype.cssRules",
     "CSSKeyframesRule.prototype.deleteRule",
     "CSSKeyframesRule.prototype.findRule",
+    "CSSKeyframesRule.prototype.length",
     "CSSKeyframesRule.prototype.name",
     "CSSKeywordValue",
     "CSSKeywordValue.prototype",
@@ -2432,6 +2433,7 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
+    "HTMLTemplateElement.prototype.shadowRootDelegatesFocus",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
@@ -4671,6 +4673,7 @@
     "RTCRtpReceiver.prototype.getParameters",
     "RTCRtpReceiver.prototype.getStats",
     "RTCRtpReceiver.prototype.getSynchronizationSources",
+    "RTCRtpReceiver.prototype.jitterBufferTarget",
     "RTCRtpReceiver.prototype.playoutDelayHint",
     "RTCRtpReceiver.prototype.rtcpTransport",
     "RTCRtpReceiver.prototype.track",
@@ -4891,6 +4894,7 @@
     "Request.prototype.referrer",
     "Request.prototype.referrerPolicy",
     "Request.prototype.signal",
+    "Request.prototype.targetAddressSpace",
     "Request.prototype.text",
     "Request.prototype.url",
     "ResizeObserver",
```

  <!-- browserapis:end -->
