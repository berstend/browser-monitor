# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
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

  
#### 122.0.6261.128 (`2024-3-12`) 
No browser API changes.

  
#### 122.0.6261.111 (`2024-3-5`) 
No browser API changes.

  
#### 122.0.6261.94 (`2024-2-27`) 
No browser API changes.

  
#### 122.0.6261.69 (`2024-2-22`) 
No browser API changes.

  
#### 122.0.6261.57 (`2024-2-20`) ⚡
Added 55 APIs, removed 8 (see: [diff](./browser_apis/chrome-stable_121.0.6167.184_to_122.0.6261.57.diff), [json](./browser_apis/chrome-stable_121.0.6167.184_to_122.0.6261.57.json), [full list](./browser_apis/chrome-stable_122.0.6261.57.json))
 ```diff
--- ./browser_apis/chrome-stable_121.0.6167.184.json	2024-02-21 00:54:01.693221434 +0000
+++ ./browser_apis/chrome-stable_122.0.6261.57.json	2024-02-21 00:54:31.545434011 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8161,
+  "browserApiCount": 8208,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2039,6 +2039,7 @@
     "HTMLHtmlElement.prototype.version",
     "HTMLIFrameElement",
     "HTMLIFrameElement.prototype",
+    "HTMLIFrameElement.prototype.adAuctionHeaders",
     "HTMLIFrameElement.prototype.align",
     "HTMLIFrameElement.prototype.allow",
     "HTMLIFrameElement.prototype.allowFullscreen",
@@ -2431,7 +2432,6 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
-    "HTMLTemplateElement.prototype.shadowRoot",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
@@ -2675,6 +2675,7 @@
     "IIRFilterNode.prototype",
     "IIRFilterNode.prototype.getFrequencyResponse",
     "IdentityCredential",
+    "IdentityCredential.disconnect",
     "IdentityCredential.prototype",
     "IdentityCredential.prototype.isAutoSelected",
     "IdentityCredential.prototype.token",
@@ -2904,6 +2905,21 @@
     "Intl.v8BreakIterator.prototype.next",
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
+    "Iterator",
+    "Iterator.from",
+    "Iterator.prototype",
+    "Iterator.prototype.constructor",
+    "Iterator.prototype.drop",
+    "Iterator.prototype.every",
+    "Iterator.prototype.filter",
+    "Iterator.prototype.find",
+    "Iterator.prototype.flatMap",
+    "Iterator.prototype.forEach",
+    "Iterator.prototype.map",
+    "Iterator.prototype.reduce",
+    "Iterator.prototype.some",
+    "Iterator.prototype.take",
+    "Iterator.prototype.toArray",
     "JSON",
     "JSON.isRawJSON",
     "JSON.parse",
@@ -3542,6 +3558,7 @@
     "Navigator.prototype.serviceWorker",
     "Navigator.prototype.setAppBadge",
     "Navigator.prototype.storage",
+    "Navigator.prototype.storageBuckets",
     "Navigator.prototype.unregisterProtocolHandler",
     "Navigator.prototype.usb",
     "Navigator.prototype.userActivation",
@@ -4178,10 +4195,8 @@
     "PaymentManager.prototype.userHint",
     "PaymentMethodChangeEvent",
     "PaymentMethodChangeEvent.prototype",
-    "PaymentMethodChangeEvent.prototype.constructor",
     "PaymentMethodChangeEvent.prototype.methodDetails",
     "PaymentMethodChangeEvent.prototype.methodName",
-    "PaymentMethodChangeEvent.prototype.updateWith",
     "PaymentRequest",
     "PaymentRequest.prototype",
     "PaymentRequest.prototype.abort",
@@ -4195,6 +4210,9 @@
     "PaymentRequest.prototype.shippingOption",
     "PaymentRequest.prototype.shippingType",
     "PaymentRequest.prototype.show",
+    "PaymentRequestUpdateEvent",
+    "PaymentRequestUpdateEvent.prototype",
+    "PaymentRequestUpdateEvent.prototype.updateWith",
     "PaymentResponse",
     "PaymentResponse.prototype",
     "PaymentResponse.prototype.complete",
@@ -5812,10 +5830,17 @@
     "Set.prototype.add",
     "Set.prototype.clear",
     "Set.prototype.delete",
+    "Set.prototype.difference",
     "Set.prototype.entries",
     "Set.prototype.forEach",
     "Set.prototype.has",
+    "Set.prototype.intersection",
+    "Set.prototype.isDisjointFrom",
+    "Set.prototype.isSubsetOf",
+    "Set.prototype.isSupersetOf",
     "Set.prototype.size",
+    "Set.prototype.symmetricDifference",
+    "Set.prototype.union",
     "Set.prototype.values",
     "ShadowRoot",
     "ShadowRoot.prototype",
@@ -5934,6 +5959,22 @@
     "Storage.prototype.length",
     "Storage.prototype.removeItem",
     "Storage.prototype.setItem",
+    "StorageBucket",
+    "StorageBucket.prototype",
+    "StorageBucket.prototype.caches",
+    "StorageBucket.prototype.estimate",
+    "StorageBucket.prototype.expires",
+    "StorageBucket.prototype.getDirectory",
+    "StorageBucket.prototype.indexedDB",
+    "StorageBucket.prototype.name",
+    "StorageBucket.prototype.persist",
+    "StorageBucket.prototype.persisted",
+    "StorageBucket.prototype.setExpires",
+    "StorageBucketManager",
+    "StorageBucketManager.prototype",
+    "StorageBucketManager.prototype.delete",
+    "StorageBucketManager.prototype.keys",
+    "StorageBucketManager.prototype.open",
     "StorageEvent",
     "StorageEvent.prototype",
     "StorageEvent.prototype.initStorageEvent",
@@ -6062,15 +6103,10 @@
     "SyntaxError.prototype",
     "TaskAttributionTiming",
     "TaskAttributionTiming.prototype",
-    "TaskAttributionTiming.prototype.constructor",
     "TaskAttributionTiming.prototype.containerId",
     "TaskAttributionTiming.prototype.containerName",
     "TaskAttributionTiming.prototype.containerSrc",
     "TaskAttributionTiming.prototype.containerType",
-    "TaskAttributionTiming.prototype.duration",
-    "TaskAttributionTiming.prototype.entryType",
-    "TaskAttributionTiming.prototype.name",
-    "TaskAttributionTiming.prototype.startTime",
     "TaskAttributionTiming.prototype.toJSON",
     "TaskController",
     "TaskController.prototype",
@@ -6295,6 +6331,7 @@
     "URLPattern",
     "URLPattern.prototype",
     "URLPattern.prototype.exec",
+    "URLPattern.prototype.hasRegExpGroups",
     "URLPattern.prototype.hash",
     "URLPattern.prototype.hostname",
     "URLPattern.prototype.password",
@@ -6563,6 +6600,12 @@
     "VirtualKeyboardGeometryChangeEvent.prototype",
     "VisibilityStateEntry",
     "VisibilityStateEntry.prototype",
+    "VisibilityStateEntry.prototype.constructor",
+    "VisibilityStateEntry.prototype.duration",
+    "VisibilityStateEntry.prototype.entryType",
+    "VisibilityStateEntry.prototype.name",
+    "VisibilityStateEntry.prototype.startTime",
+    "VisibilityStateEntry.prototype.toJSON",
     "VisualViewport",
     "VisualViewport.prototype",
     "VisualViewport.prototype.height",
@@ -6739,7 +6782,9 @@
     "WebGL2RenderingContext.prototype.drawElementsInstanced",
     "WebGL2RenderingContext.prototype.drawRangeElements",
     "WebGL2RenderingContext.prototype.drawingBufferColorSpace",
+    "WebGL2RenderingContext.prototype.drawingBufferFormat",
     "WebGL2RenderingContext.prototype.drawingBufferHeight",
+    "WebGL2RenderingContext.prototype.drawingBufferStorage",
     "WebGL2RenderingContext.prototype.drawingBufferWidth",
     "WebGL2RenderingContext.prototype.enable",
     "WebGL2RenderingContext.prototype.enableVertexAttribArray",
@@ -6959,7 +7004,9 @@
     "WebGLRenderingContext.prototype.drawArrays",
     "WebGLRenderingContext.prototype.drawElements",
     "WebGLRenderingContext.prototype.drawingBufferColorSpace",
+    "WebGLRenderingContext.prototype.drawingBufferFormat",
     "WebGLRenderingContext.prototype.drawingBufferHeight",
+    "WebGLRenderingContext.prototype.drawingBufferStorage",
     "WebGLRenderingContext.prototype.drawingBufferWidth",
     "WebGLRenderingContext.prototype.enable",
     "WebGLRenderingContext.prototype.enableVertexAttribArray",
```

  
#### 121.0.6167.184 (`2024-2-13`) 
No browser API changes.

  
#### 121.0.6167.160 (`2024-2-6`) 
No browser API changes.

  
#### 121.0.6167.139 (`2024-1-30`) 
No browser API changes.

  
#### 121.0.6167.85 (`2024-1-23`) ⚡
Added 90 APIs, removed 38 (see: [diff](./browser_apis/chrome-stable_120.0.6099.224_to_121.0.6167.85.diff), [json](./browser_apis/chrome-stable_120.0.6099.224_to_121.0.6167.85.json), [full list](./browser_apis/chrome-stable_121.0.6167.85.json))
 ```diff
--- ./browser_apis/chrome-stable_120.0.6099.224.json	2024-01-24 00:58:50.535795082 +0000
+++ ./browser_apis/chrome-stable_121.0.6167.85.json	2024-01-24 00:59:18.467655459 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8109,
+  "browserApiCount": 8161,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -34,32 +34,6 @@
     "AnalyserNode.prototype.maxDecibels",
     "AnalyserNode.prototype.minDecibels",
     "AnalyserNode.prototype.smoothingTimeConstant",
-    "Animation",
-    "Animation.prototype",
-    "Animation.prototype.cancel",
-    "Animation.prototype.commitStyles",
-    "Animation.prototype.currentTime",
-    "Animation.prototype.effect",
-    "Animation.prototype.finish",
-    "Animation.prototype.finished",
-    "Animation.prototype.id",
-    "Animation.prototype.oncancel",
-    "Animation.prototype.onfinish",
-    "Animation.prototype.onremove",
-    "Animation.prototype.pause",
-    "Animation.prototype.pending",
-    "Animation.prototype.persist",
-    "Animation.prototype.play",
-    "Animation.prototype.playState",
-    "Animation.prototype.playbackRate",
-    "Animation.prototype.rangeEnd",
-    "Animation.prototype.rangeStart",
-    "Animation.prototype.ready",
-    "Animation.prototype.replaceState",
-    "Animation.prototype.reverse",
-    "Animation.prototype.startTime",
-    "Animation.prototype.timeline",
-    "Animation.prototype.updatePlaybackRate",
     "AnimationEvent",
     "AnimationEvent.prototype",
     "AnimationEvent.prototype.animationName",
@@ -69,12 +43,9 @@
     "AnimationPlaybackEvent.prototype",
     "AnimationPlaybackEvent.prototype.currentTime",
     "AnimationPlaybackEvent.prototype.timelineTime",
-    "AnimationTimeline",
-    "AnimationTimeline.prototype",
-    "AnimationTimeline.prototype.currentTime",
-    "AnimationTimeline.prototype.duration",
     "Array",
     "Array.from",
+    "Array.fromAsync",
     "Array.isArray",
     "Array.of",
     "Array.prototype",
@@ -527,6 +498,7 @@
     "CSSImportRule.prototype.layerName",
     "CSSImportRule.prototype.media",
     "CSSImportRule.prototype.styleSheet",
+    "CSSImportRule.prototype.supportsText",
     "CSSKeyframeRule",
     "CSSKeyframeRule.prototype",
     "CSSKeyframeRule.prototype.keyText",
@@ -684,7 +656,32 @@
     "CSSTransformValue.prototype.toMatrix",
     "CSSTransition",
     "CSSTransition.prototype",
+    "CSSTransition.prototype.cancel",
+    "CSSTransition.prototype.commitStyles",
+    "CSSTransition.prototype.constructor",
+    "CSSTransition.prototype.currentTime",
+    "CSSTransition.prototype.effect",
+    "CSSTransition.prototype.finish",
+    "CSSTransition.prototype.finished",
+    "CSSTransition.prototype.id",
+    "CSSTransition.prototype.oncancel",
+    "CSSTransition.prototype.onfinish",
+    "CSSTransition.prototype.onremove",
+    "CSSTransition.prototype.pause",
+    "CSSTransition.prototype.pending",
+    "CSSTransition.prototype.persist",
+    "CSSTransition.prototype.play",
+    "CSSTransition.prototype.playState",
+    "CSSTransition.prototype.playbackRate",
+    "CSSTransition.prototype.rangeEnd",
+    "CSSTransition.prototype.rangeStart",
+    "CSSTransition.prototype.ready",
+    "CSSTransition.prototype.replaceState",
+    "CSSTransition.prototype.reverse",
+    "CSSTransition.prototype.startTime",
+    "CSSTransition.prototype.timeline",
     "CSSTransition.prototype.transitionProperty",
+    "CSSTransition.prototype.updatePlaybackRate",
     "CSSTranslate",
     "CSSTranslate.prototype",
     "CSSTranslate.prototype.constructor",
@@ -828,6 +825,10 @@
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
     "ChannelSplitterNode.prototype",
+    "CharacterBoundsUpdateEvent",
+    "CharacterBoundsUpdateEvent.prototype",
+    "CharacterBoundsUpdateEvent.prototype.rangeEnd",
+    "CharacterBoundsUpdateEvent.prototype.rangeStart",
     "Clipboard",
     "Clipboard.prototype",
     "Clipboard.prototype.read",
@@ -841,18 +842,12 @@
     "ClipboardItem.prototype",
     "ClipboardItem.prototype.getType",
     "ClipboardItem.prototype.types",
+    "ClipboardItem.supports",
     "CloseEvent",
     "CloseEvent.prototype",
     "CloseEvent.prototype.code",
     "CloseEvent.prototype.reason",
     "CloseEvent.prototype.wasClean",
-    "CloseWatcher",
-    "CloseWatcher.prototype",
-    "CloseWatcher.prototype.close",
-    "CloseWatcher.prototype.destroy",
-    "CloseWatcher.prototype.oncancel",
-    "CloseWatcher.prototype.onclose",
-    "CloseWatcher.prototype.requestClose",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -1164,6 +1159,9 @@
     "DocumentPictureInPictureEvent.prototype.window",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
+    "DocumentTimeline.prototype.constructor",
+    "DocumentTimeline.prototype.currentTime",
+    "DocumentTimeline.prototype.duration",
     "DocumentType",
     "DocumentType.prototype",
     "DocumentType.prototype.after",
@@ -1184,6 +1182,24 @@
     "DynamicsCompressorNode.prototype.reduction",
     "DynamicsCompressorNode.prototype.release",
     "DynamicsCompressorNode.prototype.threshold",
+    "EditContext",
+    "EditContext.prototype",
+    "EditContext.prototype.attachedElements",
+    "EditContext.prototype.characterBounds",
+    "EditContext.prototype.characterBoundsRangeStart",
+    "EditContext.prototype.oncharacterboundsupdate",
+    "EditContext.prototype.oncompositionend",
+    "EditContext.prototype.oncompositionstart",
+    "EditContext.prototype.ontextformatupdate",
+    "EditContext.prototype.ontextupdate",
+    "EditContext.prototype.selectionEnd",
+    "EditContext.prototype.selectionStart",
+    "EditContext.prototype.text",
+    "EditContext.prototype.updateCharacterBounds",
+    "EditContext.prototype.updateControlBounds",
+    "EditContext.prototype.updateSelection",
+    "EditContext.prototype.updateSelectionBounds",
+    "EditContext.prototype.updateText",
     "ElementInternals",
     "ElementInternals.prototype",
     "ElementInternals.prototype.ariaAtomic",
@@ -1359,6 +1375,7 @@
     "FileSystemFileHandle.prototype.move",
     "FileSystemWritableFileStream",
     "FileSystemWritableFileStream.prototype",
+    "FileSystemWritableFileStream.prototype.mode",
     "FileSystemWritableFileStream.prototype.seek",
     "FileSystemWritableFileStream.prototype.truncate",
     "FileSystemWritableFileStream.prototype.write",
@@ -1477,7 +1494,6 @@
     "GPUCommandEncoder.prototype.popDebugGroup",
     "GPUCommandEncoder.prototype.pushDebugGroup",
     "GPUCommandEncoder.prototype.resolveQuerySet",
-    "GPUCommandEncoder.prototype.writeTimestamp",
     "GPUCompilationInfo",
     "GPUCompilationInfo.prototype",
     "GPUCompilationInfo.prototype.messages",
@@ -2307,6 +2323,7 @@
     "HTMLSelectElement.prototype.selectedIndex",
     "HTMLSelectElement.prototype.selectedOptions",
     "HTMLSelectElement.prototype.setCustomValidity",
+    "HTMLSelectElement.prototype.showPicker",
     "HTMLSelectElement.prototype.size",
     "HTMLSelectElement.prototype.type",
     "HTMLSelectElement.prototype.validationMessage",
@@ -3884,6 +3901,7 @@
     "Option.prototype.constructor.prototype.dataset",
     "Option.prototype.constructor.prototype.dir",
     "Option.prototype.constructor.prototype.draggable",
+    "Option.prototype.constructor.prototype.editContext",
     "Option.prototype.constructor.prototype.elementTiming",
     "Option.prototype.constructor.prototype.enterKeyHint",
     "Option.prototype.constructor.prototype.firstElementChild",
@@ -5855,6 +5873,17 @@
     "SourceBufferList.prototype.length",
     "SourceBufferList.prototype.onaddsourcebuffer",
     "SourceBufferList.prototype.onremovesourcebuffer",
+    "SpeechSynthesis",
+    "SpeechSynthesis.prototype",
+    "SpeechSynthesis.prototype.cancel",
+    "SpeechSynthesis.prototype.getVoices",
+    "SpeechSynthesis.prototype.onvoiceschanged",
+    "SpeechSynthesis.prototype.pause",
+    "SpeechSynthesis.prototype.paused",
+    "SpeechSynthesis.prototype.pending",
+    "SpeechSynthesis.prototype.resume",
+    "SpeechSynthesis.prototype.speak",
+    "SpeechSynthesis.prototype.speaking",
     "SpeechSynthesisErrorEvent",
     "SpeechSynthesisErrorEvent.prototype",
     "SpeechSynthesisErrorEvent.prototype.charIndex",
@@ -5879,6 +5908,13 @@
     "SpeechSynthesisUtterance.prototype.text",
     "SpeechSynthesisUtterance.prototype.voice",
     "SpeechSynthesisUtterance.prototype.volume",
+    "SpeechSynthesisVoice",
+    "SpeechSynthesisVoice.prototype",
+    "SpeechSynthesisVoice.prototype.default",
+    "SpeechSynthesisVoice.prototype.lang",
+    "SpeechSynthesisVoice.prototype.localService",
+    "SpeechSynthesisVoice.prototype.name",
+    "SpeechSynthesisVoice.prototype.voiceURI",
     "StaticRange",
     "StaticRange.prototype",
     "StaticRange.prototype.collapsed",
@@ -6104,6 +6140,15 @@
     "TextEvent.prototype",
     "TextEvent.prototype.data",
     "TextEvent.prototype.initTextEvent",
+    "TextFormat",
+    "TextFormat.prototype",
+    "TextFormat.prototype.rangeEnd",
+    "TextFormat.prototype.rangeStart",
+    "TextFormat.prototype.underlineStyle",
+    "TextFormat.prototype.underlineThickness",
+    "TextFormatUpdateEvent",
+    "TextFormatUpdateEvent.prototype",
+    "TextFormatUpdateEvent.prototype.getTextFormats",
     "TextMetrics",
     "TextMetrics.prototype",
     "TextMetrics.prototype.actualBoundingBoxAscent",
@@ -6139,6 +6184,13 @@
     "TextTrackList.prototype.onaddtrack",
     "TextTrackList.prototype.onchange",
     "TextTrackList.prototype.onremovetrack",
+    "TextUpdateEvent",
+    "TextUpdateEvent.prototype",
+    "TextUpdateEvent.prototype.selectionEnd",
+    "TextUpdateEvent.prototype.selectionStart",
+    "TextUpdateEvent.prototype.text",
+    "TextUpdateEvent.prototype.updateRangeEnd",
+    "TextUpdateEvent.prototype.updateRangeStart",
     "TimeRanges",
     "TimeRanges.prototype",
     "TimeRanges.prototype.end",
```

  
### chrome-unstable
  
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

  
#### 123.0.6300.3 (`2024-2-15`) ⚡
Added 0 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_123.0.6286.0_to_123.0.6300.3.diff), [json](./browser_apis/chrome-unstable_123.0.6286.0_to_123.0.6300.3.json), [full list](./browser_apis/chrome-unstable_123.0.6300.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_123.0.6286.0.json	2024-02-16 00:53:12.142636865 +0000
+++ ./browser_apis/chrome-unstable_123.0.6300.3.json	2024-02-16 00:53:57.522219321 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8239,
+  "browserApiCount": 8238,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3400,7 +3400,6 @@
     "MessagePort",
     "MessagePort.prototype",
     "MessagePort.prototype.close",
-    "MessagePort.prototype.onclose",
     "MessagePort.prototype.onmessage",
     "MessagePort.prototype.onmessageerror",
     "MessagePort.prototype.postMessage",
```

  
#### 123.0.6286.0 (`2024-2-8`) ⚡
Added 12 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_123.0.6272.2_to_123.0.6286.0.diff), [json](./browser_apis/chrome-unstable_123.0.6272.2_to_123.0.6286.0.json), [full list](./browser_apis/chrome-unstable_123.0.6286.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_123.0.6272.2.json	2024-02-09 00:53:04.063233369 +0000
+++ ./browser_apis/chrome-unstable_123.0.6286.0.json	2024-02-09 00:53:46.279274975 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8228,
+  "browserApiCount": 8239,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3462,6 +3462,7 @@
     "NavigateEvent.prototype.userInitiated",
     "Navigation",
     "Navigation.prototype",
+    "Navigation.prototype.activation",
     "Navigation.prototype.back",
     "Navigation.prototype.canGoBack",
     "Navigation.prototype.canGoForward",
@@ -3477,6 +3478,11 @@
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
@@ -4138,6 +4144,8 @@
     "OverconstrainedError",
     "OverconstrainedError.prototype",
     "OverconstrainedError.prototype.constraint",
+    "PageRevealEvent",
+    "PageRevealEvent.prototype",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -4350,7 +4358,9 @@
     "PerformanceScriptTiming.prototype.invoker",
     "PerformanceScriptTiming.prototype.invokerType",
     "PerformanceScriptTiming.prototype.pauseDuration",
-    "PerformanceScriptTiming.prototype.sourceLocation",
+    "PerformanceScriptTiming.prototype.sourceCharPosition",
+    "PerformanceScriptTiming.prototype.sourceFunctionName",
+    "PerformanceScriptTiming.prototype.sourceURL",
     "PerformanceScriptTiming.prototype.toJSON",
     "PerformanceScriptTiming.prototype.window",
     "PerformanceScriptTiming.prototype.windowAttribution",
@@ -8004,6 +8014,7 @@
     "onoffline",
     "ononline",
     "onpagehide",
+    "onpagereveal",
     "onpageshow",
     "onpause",
     "onplay",
```

  
#### 123.0.6272.2 (`2024-2-1`) ⚡
Added 37 APIs, removed 18 (see: [diff](./browser_apis/chrome-unstable_123.0.6262.5_to_123.0.6272.2.diff), [json](./browser_apis/chrome-unstable_123.0.6262.5_to_123.0.6272.2.json), [full list](./browser_apis/chrome-unstable_123.0.6272.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_123.0.6262.5.json	2024-02-02 00:53:58.101240378 +0000
+++ ./browser_apis/chrome-unstable_123.0.6272.2.json	2024-02-02 00:54:25.625101609 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8209,
+  "browserApiCount": 8228,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -4267,6 +4267,14 @@
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
@@ -4335,6 +4343,17 @@
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
+    "PerformanceScriptTiming.prototype.sourceLocation",
+    "PerformanceScriptTiming.prototype.toJSON",
+    "PerformanceScriptTiming.prototype.window",
+    "PerformanceScriptTiming.prototype.windowAttribution",
     "PerformanceServerTiming",
     "PerformanceServerTiming.prototype",
     "PerformanceServerTiming.prototype.description",
@@ -7238,27 +7257,9 @@
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
@@ -7297,7 +7298,25 @@
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
```

  
#### 123.0.6262.5 (`2024-1-25`) ⚡
Added 11 APIs, removed 7 (see: [diff](./browser_apis/chrome-unstable_122.0.6253.3_to_123.0.6262.5.diff), [json](./browser_apis/chrome-unstable_122.0.6253.3_to_123.0.6262.5.json), [full list](./browser_apis/chrome-unstable_123.0.6262.5.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6253.3.json	2024-01-26 00:54:23.253209518 +0000
+++ ./browser_apis/chrome-unstable_123.0.6262.5.json	2024-01-26 00:55:04.009237920 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8205,
+  "browserApiCount": 8209,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2675,6 +2675,7 @@
     "IIRFilterNode.prototype",
     "IIRFilterNode.prototype.getFrequencyResponse",
     "IdentityCredential",
+    "IdentityCredential.disconnect",
     "IdentityCredential.prototype",
     "IdentityCredential.prototype.isAutoSelected",
     "IdentityCredential.prototype.token",
@@ -3399,6 +3400,7 @@
     "MessagePort",
     "MessagePort.prototype",
     "MessagePort.prototype.close",
+    "MessagePort.prototype.onclose",
     "MessagePort.prototype.onmessage",
     "MessagePort.prototype.onmessageerror",
     "MessagePort.prototype.postMessage",
@@ -4194,10 +4196,8 @@
     "PaymentManager.prototype.userHint",
     "PaymentMethodChangeEvent",
     "PaymentMethodChangeEvent.prototype",
-    "PaymentMethodChangeEvent.prototype.constructor",
     "PaymentMethodChangeEvent.prototype.methodDetails",
     "PaymentMethodChangeEvent.prototype.methodName",
-    "PaymentMethodChangeEvent.prototype.updateWith",
     "PaymentRequest",
     "PaymentRequest.prototype",
     "PaymentRequest.prototype.abort",
@@ -4211,6 +4211,9 @@
     "PaymentRequest.prototype.shippingOption",
     "PaymentRequest.prototype.shippingType",
     "PaymentRequest.prototype.show",
+    "PaymentRequestUpdateEvent",
+    "PaymentRequestUpdateEvent.prototype",
+    "PaymentRequestUpdateEvent.prototype.updateWith",
     "PaymentResponse",
     "PaymentResponse.prototype",
     "PaymentResponse.prototype.complete",
@@ -6101,15 +6104,10 @@
     "SyntaxError.prototype",
     "TaskAttributionTiming",
     "TaskAttributionTiming.prototype",
-    "TaskAttributionTiming.prototype.constructor",
     "TaskAttributionTiming.prototype.containerId",
     "TaskAttributionTiming.prototype.containerName",
     "TaskAttributionTiming.prototype.containerSrc",
     "TaskAttributionTiming.prototype.containerType",
-    "TaskAttributionTiming.prototype.duration",
-    "TaskAttributionTiming.prototype.entryType",
-    "TaskAttributionTiming.prototype.name",
-    "TaskAttributionTiming.prototype.startTime",
     "TaskAttributionTiming.prototype.toJSON",
     "TaskController",
     "TaskController.prototype",
@@ -6603,6 +6601,12 @@
     "VirtualKeyboardGeometryChangeEvent.prototype",
     "VisibilityStateEntry",
     "VisibilityStateEntry.prototype",
+    "VisibilityStateEntry.prototype.constructor",
+    "VisibilityStateEntry.prototype.duration",
+    "VisibilityStateEntry.prototype.entryType",
+    "VisibilityStateEntry.prototype.name",
+    "VisibilityStateEntry.prototype.startTime",
+    "VisibilityStateEntry.prototype.toJSON",
     "VisualViewport",
     "VisualViewport.prototype",
     "VisualViewport.prototype.height",
```

  
#### 122.0.6253.3 (`2024-1-18`) ⚡
Added 24 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_122.0.6238.2_to_122.0.6253.3.diff), [json](./browser_apis/chrome-unstable_122.0.6238.2_to_122.0.6253.3.json), [full list](./browser_apis/chrome-unstable_122.0.6253.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6238.2.json	2024-01-19 00:58:10.232446419 +0000
+++ ./browser_apis/chrome-unstable_122.0.6253.3.json	2024-01-19 00:58:29.752635096 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8182,
+  "browserApiCount": 8205,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2432,7 +2432,6 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
-    "HTMLTemplateElement.prototype.shadowRoot",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
@@ -3558,6 +3557,7 @@
     "Navigator.prototype.serviceWorker",
     "Navigator.prototype.setAppBadge",
     "Navigator.prototype.storage",
+    "Navigator.prototype.storageBuckets",
     "Navigator.prototype.unregisterProtocolHandler",
     "Navigator.prototype.usb",
     "Navigator.prototype.userActivation",
@@ -5828,10 +5828,17 @@
     "Set.prototype.add",
     "Set.prototype.clear",
     "Set.prototype.delete",
+    "Set.prototype.difference",
     "Set.prototype.entries",
     "Set.prototype.forEach",
     "Set.prototype.has",
+    "Set.prototype.intersection",
+    "Set.prototype.isDisjointFrom",
+    "Set.prototype.isSubsetOf",
+    "Set.prototype.isSupersetOf",
     "Set.prototype.size",
+    "Set.prototype.symmetricDifference",
+    "Set.prototype.union",
     "Set.prototype.values",
     "ShadowRoot",
     "ShadowRoot.prototype",
@@ -5950,6 +5957,22 @@
     "Storage.prototype.length",
     "Storage.prototype.removeItem",
     "Storage.prototype.setItem",
+    "StorageBucket",
+    "StorageBucket.prototype",
+    "StorageBucket.prototype.caches",
+    "StorageBucket.prototype.estimate",
+    "StorageBucket.prototype.expires",
+    "StorageBucket.prototype.getDirectory",
+    "StorageBucket.prototype.indexedDB",
+    "StorageBucket.prototype.name",
+    "StorageBucket.prototype.persist",
+    "StorageBucket.prototype.persisted",
+    "StorageBucket.prototype.setExpires",
+    "StorageBucketManager",
+    "StorageBucketManager.prototype",
+    "StorageBucketManager.prototype.delete",
+    "StorageBucketManager.prototype.keys",
+    "StorageBucketManager.prototype.open",
     "StorageEvent",
     "StorageEvent.prototype",
     "StorageEvent.prototype.initStorageEvent",
```

  
#### 122.0.6238.2 (`2024-1-11`) ⚡
Added 19 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_122.0.6226.2_to_122.0.6238.2.diff), [json](./browser_apis/chrome-unstable_122.0.6226.2_to_122.0.6238.2.json), [full list](./browser_apis/chrome-unstable_122.0.6238.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6226.2.json	2024-01-12 00:58:19.096227133 +0000
+++ ./browser_apis/chrome-unstable_122.0.6238.2.json	2024-01-12 00:58:46.580315693 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8163,
+  "browserApiCount": 8182,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2905,6 +2905,21 @@
     "Intl.v8BreakIterator.prototype.next",
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
+    "Iterator",
+    "Iterator.from",
+    "Iterator.prototype",
+    "Iterator.prototype.constructor",
+    "Iterator.prototype.drop",
+    "Iterator.prototype.every",
+    "Iterator.prototype.filter",
+    "Iterator.prototype.find",
+    "Iterator.prototype.flatMap",
+    "Iterator.prototype.forEach",
+    "Iterator.prototype.map",
+    "Iterator.prototype.reduce",
+    "Iterator.prototype.some",
+    "Iterator.prototype.take",
+    "Iterator.prototype.toArray",
     "JSON",
     "JSON.isRawJSON",
     "JSON.parse",
@@ -6741,7 +6756,9 @@
     "WebGL2RenderingContext.prototype.drawElementsInstanced",
     "WebGL2RenderingContext.prototype.drawRangeElements",
     "WebGL2RenderingContext.prototype.drawingBufferColorSpace",
+    "WebGL2RenderingContext.prototype.drawingBufferFormat",
     "WebGL2RenderingContext.prototype.drawingBufferHeight",
+    "WebGL2RenderingContext.prototype.drawingBufferStorage",
     "WebGL2RenderingContext.prototype.drawingBufferWidth",
     "WebGL2RenderingContext.prototype.enable",
     "WebGL2RenderingContext.prototype.enableVertexAttribArray",
@@ -6961,7 +6978,9 @@
     "WebGLRenderingContext.prototype.drawArrays",
     "WebGLRenderingContext.prototype.drawElements",
     "WebGLRenderingContext.prototype.drawingBufferColorSpace",
+    "WebGLRenderingContext.prototype.drawingBufferFormat",
     "WebGLRenderingContext.prototype.drawingBufferHeight",
+    "WebGLRenderingContext.prototype.drawingBufferStorage",
     "WebGLRenderingContext.prototype.drawingBufferWidth",
     "WebGLRenderingContext.prototype.enable",
     "WebGLRenderingContext.prototype.enableVertexAttribArray",
```

  
#### 122.0.6226.2 (`2024-1-5`) ⚡
Added 1 APIs, removed 7 (see: [diff](./browser_apis/chrome-unstable_122.0.6182.0_to_122.0.6226.2.diff), [json](./browser_apis/chrome-unstable_122.0.6182.0_to_122.0.6226.2.json), [full list](./browser_apis/chrome-unstable_122.0.6226.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6182.0.json	2024-01-06 00:55:54.949918177 +0000
+++ ./browser_apis/chrome-unstable_122.0.6226.2.json	2024-01-06 00:56:15.305829843 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8169,
+  "browserApiCount": 8163,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -848,13 +848,6 @@
     "CloseEvent.prototype.code",
     "CloseEvent.prototype.reason",
     "CloseEvent.prototype.wasClean",
-    "CloseWatcher",
-    "CloseWatcher.prototype",
-    "CloseWatcher.prototype.close",
-    "CloseWatcher.prototype.destroy",
-    "CloseWatcher.prototype.oncancel",
-    "CloseWatcher.prototype.onclose",
-    "CloseWatcher.prototype.requestClose",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -2046,6 +2039,7 @@
     "HTMLHtmlElement.prototype.version",
     "HTMLIFrameElement",
     "HTMLIFrameElement.prototype",
+    "HTMLIFrameElement.prototype.adAuctionHeaders",
     "HTMLIFrameElement.prototype.align",
     "HTMLIFrameElement.prototype.allow",
     "HTMLIFrameElement.prototype.allowFullscreen",
```

  
#### 122.0.6182.0 (`2023-12-14`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_122.0.6170.5_to_122.0.6182.0.diff), [json](./browser_apis/chrome-unstable_122.0.6170.5_to_122.0.6182.0.json), [full list](./browser_apis/chrome-unstable_122.0.6182.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6170.5.json	2023-12-15 00:57:48.155735726 +0000
+++ ./browser_apis/chrome-unstable_122.0.6182.0.json	2023-12-15 00:58:07.811719749 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8167,
+  "browserApiCount": 8169,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1382,6 +1382,7 @@
     "FileSystemFileHandle.prototype.move",
     "FileSystemWritableFileStream",
     "FileSystemWritableFileStream.prototype",
+    "FileSystemWritableFileStream.prototype.mode",
     "FileSystemWritableFileStream.prototype.seek",
     "FileSystemWritableFileStream.prototype.truncate",
     "FileSystemWritableFileStream.prototype.write",
@@ -6301,6 +6302,7 @@
     "URLPattern",
     "URLPattern.prototype",
     "URLPattern.prototype.exec",
+    "URLPattern.prototype.hasRegExpGroups",
     "URLPattern.prototype.hash",
     "URLPattern.prototype.hostname",
     "URLPattern.prototype.password",
```

  <!-- browserapis:end -->
