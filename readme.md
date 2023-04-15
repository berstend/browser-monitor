# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 112.0.5615.121 (`2023-4-14`) 
No browser API changes.

  
#### 112.0.5615.49 (`2023-4-4`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_111.0.5563.146_to_112.0.5615.49.diff), [json](./browser_apis/chrome-stable_111.0.5563.146_to_112.0.5615.49.json), [full list](./browser_apis/chrome-stable_112.0.5615.49.json))
 ```diff
--- ./browser_apis/chrome-stable_111.0.5563.146.json	2023-04-13 09:08:46.814887976 +0000
+++ ./browser_apis/chrome-stable_112.0.5615.49.json	2023-04-13 09:09:15.255003645 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7716,
+  "browserApiCount": 7720,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -626,6 +626,9 @@
     "CSSStyleDeclaration.prototype.setProperty",
     "CSSStyleRule",
     "CSSStyleRule.prototype",
+    "CSSStyleRule.prototype.cssRules",
+    "CSSStyleRule.prototype.deleteRule",
+    "CSSStyleRule.prototype.insertRule",
     "CSSStyleRule.prototype.selectorText",
     "CSSStyleRule.prototype.style",
     "CSSStyleRule.prototype.styleMap",
@@ -4435,6 +4438,7 @@
     "RegExp.prototype.test",
     "RegExp.prototype.toString",
     "RegExp.prototype.unicode",
+    "RegExp.prototype.unicodeSets",
     "RegExp.rightContext",
     "RelativeOrientationSensor",
     "RelativeOrientationSensor.prototype",
```

  
#### 111.0.5563.146 (`2023-3-27`) 
No browser API changes.

  
#### 111.0.5563.110 (`2023-3-21`) 
No browser API changes.

  
#### 111.0.5563.64 (`2023-3-7`) ⚡
Added 16 APIs, removed 9 (see: [diff](./browser_apis/chrome-stable_110.0.5481.177_to_111.0.5563.64.diff), [json](./browser_apis/chrome-stable_110.0.5481.177_to_111.0.5563.64.json), [full list](./browser_apis/chrome-stable_111.0.5563.64.json))
 ```diff
--- ./browser_apis/chrome-stable_110.0.5481.177.json	2023-04-13 09:07:51.546664727 +0000
+++ ./browser_apis/chrome-stable_111.0.5563.64.json	2023-04-13 09:08:09.846735082 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7709,
+  "browserApiCount": 7716,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -117,6 +117,9 @@
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
     "ArrayBuffer.prototype.byteLength",
+    "ArrayBuffer.prototype.maxByteLength",
+    "ArrayBuffer.prototype.resizable",
+    "ArrayBuffer.prototype.resize",
     "ArrayBuffer.prototype.slice",
     "Atomics",
     "Atomics.add",
@@ -477,6 +480,8 @@
     "CSSAnimation.prototype.animationName",
     "CSSContainerRule",
     "CSSContainerRule.prototype",
+    "CSSContainerRule.prototype.containerName",
+    "CSSContainerRule.prototype.containerQuery",
     "CSSCounterStyleRule",
     "CSSCounterStyleRule.prototype",
     "CSSCounterStyleRule.prototype.additiveSymbols",
@@ -2100,6 +2105,7 @@
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
     "HTMLTemplateElement.prototype.shadowRoot",
+    "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
     "HTMLTextAreaElement.prototype.autocomplete",
@@ -3805,18 +3811,9 @@
     "PaymentAddress.prototype.region",
     "PaymentAddress.prototype.sortingCode",
     "PaymentAddress.prototype.toJSON",
-    "PaymentInstruments",
-    "PaymentInstruments.prototype",
-    "PaymentInstruments.prototype.clear",
-    "PaymentInstruments.prototype.delete",
-    "PaymentInstruments.prototype.get",
-    "PaymentInstruments.prototype.has",
-    "PaymentInstruments.prototype.keys",
-    "PaymentInstruments.prototype.set",
     "PaymentManager",
     "PaymentManager.prototype",
     "PaymentManager.prototype.enableDelegations",
-    "PaymentManager.prototype.instruments",
     "PaymentManager.prototype.userHint",
     "PaymentMethodChangeEvent",
     "PaymentMethodChangeEvent.prototype",
@@ -5578,6 +5575,7 @@
     "String.prototype.fontsize",
     "String.prototype.includes",
     "String.prototype.indexOf",
+    "String.prototype.isWellFormed",
     "String.prototype.italics",
     "String.prototype.lastIndexOf",
     "String.prototype.link",
@@ -5605,6 +5603,7 @@
     "String.prototype.toLowerCase",
     "String.prototype.toString",
     "String.prototype.toUpperCase",
+    "String.prototype.toWellFormed",
     "String.prototype.trim",
     "String.prototype.trimEnd",
     "String.prototype.trimStart",
@@ -6124,6 +6123,12 @@
     "VideoPlaybackQuality.prototype.creationTime",
     "VideoPlaybackQuality.prototype.droppedVideoFrames",
     "VideoPlaybackQuality.prototype.totalVideoFrames",
+    "ViewTransition",
+    "ViewTransition.prototype",
+    "ViewTransition.prototype.finished",
+    "ViewTransition.prototype.ready",
+    "ViewTransition.prototype.skipTransition",
+    "ViewTransition.prototype.updateCallbackDone",
     "VirtualKeyboard",
     "VirtualKeyboard.prototype",
     "VirtualKeyboard.prototype.boundingRect",
@@ -7052,6 +7057,7 @@
     "XMLDocument.prototype.rootElement",
     "XMLDocument.prototype.scripts",
     "XMLDocument.prototype.scrollingElement",
+    "XMLDocument.prototype.startViewTransition",
     "XMLDocument.prototype.styleSheets",
     "XMLDocument.prototype.timeline",
     "XMLDocument.prototype.title",
@@ -7239,6 +7245,7 @@
     "XRSession.prototype.depthDataFormat",
     "XRSession.prototype.depthUsage",
     "XRSession.prototype.domOverlayState",
+    "XRSession.prototype.enabledFeatures",
     "XRSession.prototype.end",
     "XRSession.prototype.environmentBlendMode",
     "XRSession.prototype.inputSources",
```

  
#### 110.0.5481.177 (`2023-2-22`) 
No browser API changes.

  
#### 110.0.5481.100 (`2023-2-14`) ⚡
Added 0 APIs, removed 60 (see: [diff](./browser_apis/chrome-stable_110.0.5481.96_to_110.0.5481.100.diff), [json](./browser_apis/chrome-stable_110.0.5481.96_to_110.0.5481.100.json), [full list](./browser_apis/chrome-stable_110.0.5481.100.json))
 ```diff
--- ./browser_apis/chrome-stable_110.0.5481.96.json	2023-02-15 01:09:07.180690561 +0000
+++ ./browser_apis/chrome-stable_110.0.5481.100.json	2023-02-15 01:09:38.779226338 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7769,
+  "browserApiCount": 7709,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -411,20 +411,6 @@
     "ByteLengthQueuingStrategy.prototype.size",
     "CDATASection",
     "CDATASection.prototype",
-    "CSPViolationReportBody",
-    "CSPViolationReportBody.prototype",
-    "CSPViolationReportBody.prototype.blockedURL",
-    "CSPViolationReportBody.prototype.columnNumber",
-    "CSPViolationReportBody.prototype.disposition",
-    "CSPViolationReportBody.prototype.documentURL",
-    "CSPViolationReportBody.prototype.effectiveDirective",
-    "CSPViolationReportBody.prototype.lineNumber",
-    "CSPViolationReportBody.prototype.originalPolicy",
-    "CSPViolationReportBody.prototype.referrer",
-    "CSPViolationReportBody.prototype.sample",
-    "CSPViolationReportBody.prototype.sourceFile",
-    "CSPViolationReportBody.prototype.statusCode",
-    "CSPViolationReportBody.prototype.toJSON",
     "CSS",
     "CSS.Hz",
     "CSS.Q",
@@ -869,17 +855,6 @@
     "CookieStoreManager.prototype.getSubscriptions",
     "CookieStoreManager.prototype.subscribe",
     "CookieStoreManager.prototype.unsubscribe",
-    "CoopAccessViolationReportBody",
-    "CoopAccessViolationReportBody.prototype",
-    "CoopAccessViolationReportBody.prototype.columnNumber",
-    "CoopAccessViolationReportBody.prototype.lineNumber",
-    "CoopAccessViolationReportBody.prototype.openeeURL",
-    "CoopAccessViolationReportBody.prototype.openerURL",
-    "CoopAccessViolationReportBody.prototype.otherDocumentURL",
-    "CoopAccessViolationReportBody.prototype.property",
-    "CoopAccessViolationReportBody.prototype.sourceFile",
-    "CoopAccessViolationReportBody.prototype.toJSON",
-    "CoopAccessViolationReportBody.prototype.type",
     "CountQueuingStrategy",
     "CountQueuingStrategy.prototype",
     "CountQueuingStrategy.prototype.highWaterMark",
@@ -1122,15 +1097,6 @@
     "DelegatedInkTrailPresenter.prototype.expectedImprovement",
     "DelegatedInkTrailPresenter.prototype.presentationArea",
     "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
-    "DeprecationReportBody",
-    "DeprecationReportBody.prototype",
-    "DeprecationReportBody.prototype.anticipatedRemoval",
-    "DeprecationReportBody.prototype.columnNumber",
-    "DeprecationReportBody.prototype.id",
-    "DeprecationReportBody.prototype.lineNumber",
-    "DeprecationReportBody.prototype.message",
-    "DeprecationReportBody.prototype.sourceFile",
-    "DeprecationReportBody.prototype.toJSON",
     "DeviceMotionEvent",
     "DeviceMotionEvent.prototype",
     "DeviceMotionEvent.prototype.acceleration",
@@ -1153,15 +1119,6 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
-    "DocumentPolicyViolationReportBody",
-    "DocumentPolicyViolationReportBody.prototype",
-    "DocumentPolicyViolationReportBody.prototype.columnNumber",
-    "DocumentPolicyViolationReportBody.prototype.disposition",
-    "DocumentPolicyViolationReportBody.prototype.featureId",
-    "DocumentPolicyViolationReportBody.prototype.lineNumber",
-    "DocumentPolicyViolationReportBody.prototype.message",
-    "DocumentPolicyViolationReportBody.prototype.sourceFile",
-    "DocumentPolicyViolationReportBody.prototype.toJSON",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -2520,14 +2477,6 @@
     "IntersectionObserverEntry.prototype.rootBounds",
     "IntersectionObserverEntry.prototype.target",
     "IntersectionObserverEntry.prototype.time",
-    "InterventionReportBody",
-    "InterventionReportBody.prototype",
-    "InterventionReportBody.prototype.columnNumber",
-    "InterventionReportBody.prototype.id",
-    "InterventionReportBody.prototype.lineNumber",
-    "InterventionReportBody.prototype.message",
-    "InterventionReportBody.prototype.sourceFile",
-    "InterventionReportBody.prototype.toJSON",
     "Intl",
     "Intl.Collator",
     "Intl.Collator.prototype",
@@ -4501,15 +4450,6 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
-    "Report",
-    "Report.prototype",
-    "Report.prototype.body",
-    "Report.prototype.toJSON",
-    "Report.prototype.type",
-    "Report.prototype.url",
-    "ReportBody",
-    "ReportBody.prototype",
-    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
```

  
#### 110.0.5481.96 (`2023-2-13`) 
No browser API changes.

  
#### 110.0.5481.77 (`2023-2-7`) ⚡
Added 96 APIs, removed 20 (see: [diff](./browser_apis/chrome-stable_109.0.5414.119_to_110.0.5481.77.diff), [json](./browser_apis/chrome-stable_109.0.5414.119_to_110.0.5481.77.json), [full list](./browser_apis/chrome-stable_110.0.5481.77.json))
 ```diff
--- ./browser_apis/chrome-stable_109.0.5414.119.json	2023-02-08 01:07:09.517500266 +0000
+++ ./browser_apis/chrome-stable_110.0.5481.77.json	2023-02-08 01:07:44.273972962 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7693,
+  "browserApiCount": 7769,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -106,9 +106,13 @@
     "Array.prototype.sort",
     "Array.prototype.splice",
     "Array.prototype.toLocaleString",
+    "Array.prototype.toReversed",
+    "Array.prototype.toSorted",
+    "Array.prototype.toSpliced",
     "Array.prototype.toString",
     "Array.prototype.unshift",
     "Array.prototype.values",
+    "Array.prototype.with",
     "ArrayBuffer",
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
@@ -210,8 +214,11 @@
     "AudioContext.prototype.createMediaStreamDestination",
     "AudioContext.prototype.createMediaStreamSource",
     "AudioContext.prototype.getOutputTimestamp",
+    "AudioContext.prototype.onsinkchange",
     "AudioContext.prototype.outputLatency",
     "AudioContext.prototype.resume",
+    "AudioContext.prototype.setSinkId",
+    "AudioContext.prototype.sinkId",
     "AudioContext.prototype.suspend",
     "AudioData",
     "AudioData.prototype",
@@ -291,6 +298,9 @@
     "AudioProcessingEvent.prototype.inputBuffer",
     "AudioProcessingEvent.prototype.outputBuffer",
     "AudioProcessingEvent.prototype.playbackTime",
+    "AudioSinkInfo",
+    "AudioSinkInfo.prototype",
+    "AudioSinkInfo.prototype.type",
     "AudioWorklet",
     "AudioWorklet.prototype",
     "AudioWorklet.prototype.addModule",
@@ -401,6 +411,20 @@
     "ByteLengthQueuingStrategy.prototype.size",
     "CDATASection",
     "CDATASection.prototype",
+    "CSPViolationReportBody",
+    "CSPViolationReportBody.prototype",
+    "CSPViolationReportBody.prototype.blockedURL",
+    "CSPViolationReportBody.prototype.columnNumber",
+    "CSPViolationReportBody.prototype.disposition",
+    "CSPViolationReportBody.prototype.documentURL",
+    "CSPViolationReportBody.prototype.effectiveDirective",
+    "CSPViolationReportBody.prototype.lineNumber",
+    "CSPViolationReportBody.prototype.originalPolicy",
+    "CSPViolationReportBody.prototype.referrer",
+    "CSPViolationReportBody.prototype.sample",
+    "CSPViolationReportBody.prototype.sourceFile",
+    "CSPViolationReportBody.prototype.statusCode",
+    "CSPViolationReportBody.prototype.toJSON",
     "CSS",
     "CSS.Hz",
     "CSS.Q",
@@ -700,27 +724,8 @@
     "CacheStorage.prototype.open",
     "CanvasCaptureMediaStreamTrack",
     "CanvasCaptureMediaStreamTrack.prototype",
-    "CanvasCaptureMediaStreamTrack.prototype.applyConstraints",
     "CanvasCaptureMediaStreamTrack.prototype.canvas",
-    "CanvasCaptureMediaStreamTrack.prototype.clone",
-    "CanvasCaptureMediaStreamTrack.prototype.constructor",
-    "CanvasCaptureMediaStreamTrack.prototype.contentHint",
-    "CanvasCaptureMediaStreamTrack.prototype.enabled",
-    "CanvasCaptureMediaStreamTrack.prototype.getCapabilities",
-    "CanvasCaptureMediaStreamTrack.prototype.getCaptureHandle",
-    "CanvasCaptureMediaStreamTrack.prototype.getConstraints",
-    "CanvasCaptureMediaStreamTrack.prototype.getSettings",
-    "CanvasCaptureMediaStreamTrack.prototype.id",
-    "CanvasCaptureMediaStreamTrack.prototype.kind",
-    "CanvasCaptureMediaStreamTrack.prototype.label",
-    "CanvasCaptureMediaStreamTrack.prototype.muted",
-    "CanvasCaptureMediaStreamTrack.prototype.oncapturehandlechange",
-    "CanvasCaptureMediaStreamTrack.prototype.onended",
-    "CanvasCaptureMediaStreamTrack.prototype.onmute",
-    "CanvasCaptureMediaStreamTrack.prototype.onunmute",
-    "CanvasCaptureMediaStreamTrack.prototype.readyState",
     "CanvasCaptureMediaStreamTrack.prototype.requestFrame",
-    "CanvasCaptureMediaStreamTrack.prototype.stop",
     "CanvasFilter",
     "CanvasFilter.prototype",
     "CanvasGradient",
@@ -864,6 +869,17 @@
     "CookieStoreManager.prototype.getSubscriptions",
     "CookieStoreManager.prototype.subscribe",
     "CookieStoreManager.prototype.unsubscribe",
+    "CoopAccessViolationReportBody",
+    "CoopAccessViolationReportBody.prototype",
+    "CoopAccessViolationReportBody.prototype.columnNumber",
+    "CoopAccessViolationReportBody.prototype.lineNumber",
+    "CoopAccessViolationReportBody.prototype.openeeURL",
+    "CoopAccessViolationReportBody.prototype.openerURL",
+    "CoopAccessViolationReportBody.prototype.otherDocumentURL",
+    "CoopAccessViolationReportBody.prototype.property",
+    "CoopAccessViolationReportBody.prototype.sourceFile",
+    "CoopAccessViolationReportBody.prototype.toJSON",
+    "CoopAccessViolationReportBody.prototype.type",
     "CountQueuingStrategy",
     "CountQueuingStrategy.prototype",
     "CountQueuingStrategy.prototype.highWaterMark",
@@ -1106,6 +1122,15 @@
     "DelegatedInkTrailPresenter.prototype.expectedImprovement",
     "DelegatedInkTrailPresenter.prototype.presentationArea",
     "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
+    "DeprecationReportBody",
+    "DeprecationReportBody.prototype",
+    "DeprecationReportBody.prototype.anticipatedRemoval",
+    "DeprecationReportBody.prototype.columnNumber",
+    "DeprecationReportBody.prototype.id",
+    "DeprecationReportBody.prototype.lineNumber",
+    "DeprecationReportBody.prototype.message",
+    "DeprecationReportBody.prototype.sourceFile",
+    "DeprecationReportBody.prototype.toJSON",
     "DeviceMotionEvent",
     "DeviceMotionEvent.prototype",
     "DeviceMotionEvent.prototype.acceleration",
@@ -1128,6 +1153,15 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
+    "DocumentPolicyViolationReportBody",
+    "DocumentPolicyViolationReportBody.prototype",
+    "DocumentPolicyViolationReportBody.prototype.columnNumber",
+    "DocumentPolicyViolationReportBody.prototype.disposition",
+    "DocumentPolicyViolationReportBody.prototype.featureId",
+    "DocumentPolicyViolationReportBody.prototype.lineNumber",
+    "DocumentPolicyViolationReportBody.prototype.message",
+    "DocumentPolicyViolationReportBody.prototype.sourceFile",
+    "DocumentPolicyViolationReportBody.prototype.toJSON",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -1313,6 +1347,7 @@
     "FileSystemDirectoryHandle.prototype.kind",
     "FileSystemDirectoryHandle.prototype.name",
     "FileSystemDirectoryHandle.prototype.queryPermission",
+    "FileSystemDirectoryHandle.prototype.remove",
     "FileSystemDirectoryHandle.prototype.removeEntry",
     "FileSystemDirectoryHandle.prototype.requestPermission",
     "FileSystemDirectoryHandle.prototype.resolve",
@@ -1725,6 +1760,7 @@
     "HTMLIFrameElement.prototype.allowPaymentRequest",
     "HTMLIFrameElement.prototype.contentDocument",
     "HTMLIFrameElement.prototype.contentWindow",
+    "HTMLIFrameElement.prototype.credentialless",
     "HTMLIFrameElement.prototype.csp",
     "HTMLIFrameElement.prototype.featurePolicy",
     "HTMLIFrameElement.prototype.frameBorder",
@@ -2484,6 +2520,14 @@
     "IntersectionObserverEntry.prototype.rootBounds",
     "IntersectionObserverEntry.prototype.target",
     "IntersectionObserverEntry.prototype.time",
+    "InterventionReportBody",
+    "InterventionReportBody.prototype",
+    "InterventionReportBody.prototype.columnNumber",
+    "InterventionReportBody.prototype.id",
+    "InterventionReportBody.prototype.lineNumber",
+    "InterventionReportBody.prototype.message",
+    "InterventionReportBody.prototype.sourceFile",
+    "InterventionReportBody.prototype.toJSON",
     "Intl",
     "Intl.Collator",
     "Intl.Collator.prototype",
@@ -2622,6 +2666,7 @@
     "LaunchParams",
     "LaunchParams.prototype",
     "LaunchParams.prototype.files",
+    "LaunchParams.prototype.targetURL",
     "LaunchQueue",
     "LaunchQueue.prototype",
     "LaunchQueue.prototype.setConsumer",
@@ -2995,6 +3040,25 @@
     "MediaStreamTrackEvent.prototype.track",
     "MediaStreamTrackGenerator",
     "MediaStreamTrackGenerator.prototype",
+    "MediaStreamTrackGenerator.prototype.applyConstraints",
+    "MediaStreamTrackGenerator.prototype.clone",
+    "MediaStreamTrackGenerator.prototype.constructor",
+    "MediaStreamTrackGenerator.prototype.contentHint",
+    "MediaStreamTrackGenerator.prototype.enabled",
+    "MediaStreamTrackGenerator.prototype.getCapabilities",
+    "MediaStreamTrackGenerator.prototype.getCaptureHandle",
+    "MediaStreamTrackGenerator.prototype.getConstraints",
+    "MediaStreamTrackGenerator.prototype.getSettings",
+    "MediaStreamTrackGenerator.prototype.id",
+    "MediaStreamTrackGenerator.prototype.kind",
+    "MediaStreamTrackGenerator.prototype.label",
+    "MediaStreamTrackGenerator.prototype.muted",
+    "MediaStreamTrackGenerator.prototype.oncapturehandlechange",
+    "MediaStreamTrackGenerator.prototype.onended",
+    "MediaStreamTrackGenerator.prototype.onmute",
+    "MediaStreamTrackGenerator.prototype.onunmute",
+    "MediaStreamTrackGenerator.prototype.readyState",
+    "MediaStreamTrackGenerator.prototype.stop",
     "MediaStreamTrackGenerator.prototype.writable",
     "MediaStreamTrackProcessor",
     "MediaStreamTrackProcessor.prototype",
@@ -4437,6 +4501,15 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
+    "Report",
+    "Report.prototype",
+    "Report.prototype.body",
+    "Report.prototype.toJSON",
+    "Report.prototype.type",
+    "Report.prototype.url",
+    "ReportBody",
+    "ReportBody.prototype",
+    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
@@ -6019,7 +6092,10 @@
     "Uint8Array.prototype.sort",
     "Uint8Array.prototype.subarray",
     "Uint8Array.prototype.toLocaleString",
+    "Uint8Array.prototype.toReversed",
+    "Uint8Array.prototype.toSorted",
     "Uint8Array.prototype.values",
+    "Uint8Array.prototype.with",
     "Uint8ClampedArray",
     "Uint8ClampedArray.prototype",
     "UserActivation",
@@ -7360,6 +7436,7 @@
     "console.warn",
     "cookieStore",
     "createImageBitmap",
+    "credentialless",
     "crossOriginIsolated",
     "crypto",
     "customElements",
@@ -7675,7 +7752,6 @@
     "webkitSpeechRecognitionEvent.prototype",
     "webkitSpeechRecognitionEvent.prototype.resultIndex",
     "webkitSpeechRecognitionEvent.prototype.results",
-    "webkitStorageInfo",
     "webkitURL",
     "webkitURL.createObjectURL",
     "webkitURL.prototype",
```

  
#### 109.0.5414.119 (`2023-1-24`) 
No browser API changes.

  
#### 109.0.5414.74 (`2023-1-10`) ⚡
Added 110 APIs, removed 1 (see: [diff](./browser_apis/chrome-stable_108.0.5359.124_to_109.0.5414.74.diff), [json](./browser_apis/chrome-stable_108.0.5359.124_to_109.0.5414.74.json), [full list](./browser_apis/chrome-stable_109.0.5414.74.json))
 ```diff
--- ./browser_apis/chrome-stable_108.0.5359.124.json	2023-01-11 01:06:01.837413756 +0000
+++ ./browser_apis/chrome-stable_109.0.5414.74.json	2023-01-11 01:06:31.745581932 +0000
@@ -1,7 +1,6 @@
 {
   "browser": "chrome-stable",
-  "version": "108.0.0.0",
-  "browserApiCount": 7584,
+  "browserApiCount": 7693,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -804,6 +803,9 @@
     "CanvasRenderingContext2D.prototype.transform",
     "CanvasRenderingContext2D.prototype.translate",
     "CanvasRenderingContext2D.prototype.wordSpacing",
+    "CaptureController",
+    "CaptureController.prototype",
+    "CaptureController.prototype.setFocusBehavior",
     "ChannelMergerNode",
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
@@ -2743,6 +2745,112 @@
     "Math.tan",
     "Math.tanh",
     "Math.trunc",
+    "MathMLElement",
+    "MathMLElement.prototype",
+    "MathMLElement.prototype.attributeStyleMap",
+    "MathMLElement.prototype.autofocus",
+    "MathMLElement.prototype.blur",
+    "MathMLElement.prototype.dataset",
+    "MathMLElement.prototype.focus",
+    "MathMLElement.prototype.nonce",
+    "MathMLElement.prototype.onabort",
+    "MathMLElement.prototype.onanimationend",
+    "MathMLElement.prototype.onanimationiteration",
+    "MathMLElement.prototype.onanimationstart",
+    "MathMLElement.prototype.onauxclick",
+    "MathMLElement.prototype.onbeforeinput",
+    "MathMLElement.prototype.onbeforematch",
+    "MathMLElement.prototype.onbeforexrselect",
+    "MathMLElement.prototype.onblur",
+    "MathMLElement.prototype.oncancel",
+    "MathMLElement.prototype.oncanplay",
+    "MathMLElement.prototype.oncanplaythrough",
+    "MathMLElement.prototype.onchange",
+    "MathMLElement.prototype.onclick",
+    "MathMLElement.prototype.onclose",
+    "MathMLElement.prototype.oncontentvisibilityautostatechange",
+    "MathMLElement.prototype.oncontextlost",
+    "MathMLElement.prototype.oncontextmenu",
+    "MathMLElement.prototype.oncontextrestored",
+    "MathMLElement.prototype.oncopy",
+    "MathMLElement.prototype.oncuechange",
+    "MathMLElement.prototype.oncut",
+    "MathMLElement.prototype.ondblclick",
+    "MathMLElement.prototype.ondrag",
+    "MathMLElement.prototype.ondragend",
+    "MathMLElement.prototype.ondragenter",
+    "MathMLElement.prototype.ondragleave",
+    "MathMLElement.prototype.ondragover",
+    "MathMLElement.prototype.ondragstart",
+    "MathMLElement.prototype.ondrop",
+    "MathMLElement.prototype.ondurationchange",
+    "MathMLElement.prototype.onemptied",
+    "MathMLElement.prototype.onended",
+    "MathMLElement.prototype.onerror",
+    "MathMLElement.prototype.onfocus",
+    "MathMLElement.prototype.onformdata",
+    "MathMLElement.prototype.ongotpointercapture",
+    "MathMLElement.prototype.oninput",
+    "MathMLElement.prototype.oninvalid",
+    "MathMLElement.prototype.onkeydown",
+    "MathMLElement.prototype.onkeypress",
+    "MathMLElement.prototype.onkeyup",
+    "MathMLElement.prototype.onload",
+    "MathMLElement.prototype.onloadeddata",
+    "MathMLElement.prototype.onloadedmetadata",
+    "MathMLElement.prototype.onloadstart",
+    "MathMLElement.prototype.onlostpointercapture",
+    "MathMLElement.prototype.onmousedown",
+    "MathMLElement.prototype.onmouseenter",
+    "MathMLElement.prototype.onmouseleave",
+    "MathMLElement.prototype.onmousemove",
+    "MathMLElement.prototype.onmouseout",
+    "MathMLElement.prototype.onmouseover",
+    "MathMLElement.prototype.onmouseup",
+    "MathMLElement.prototype.onmousewheel",
+    "MathMLElement.prototype.onpaste",
+    "MathMLElement.prototype.onpause",
+    "MathMLElement.prototype.onplay",
+    "MathMLElement.prototype.onplaying",
+    "MathMLElement.prototype.onpointercancel",
+    "MathMLElement.prototype.onpointerdown",
+    "MathMLElement.prototype.onpointerenter",
+    "MathMLElement.prototype.onpointerleave",
+    "MathMLElement.prototype.onpointermove",
+    "MathMLElement.prototype.onpointerout",
+    "MathMLElement.prototype.onpointerover",
+    "MathMLElement.prototype.onpointerrawupdate",
+    "MathMLElement.prototype.onpointerup",
+    "MathMLElement.prototype.onprogress",
+    "MathMLElement.prototype.onratechange",
+    "MathMLElement.prototype.onreset",
+    "MathMLElement.prototype.onresize",
+    "MathMLElement.prototype.onscroll",
+    "MathMLElement.prototype.onsecuritypolicyviolation",
+    "MathMLElement.prototype.onseeked",
+    "MathMLElement.prototype.onseeking",
+    "MathMLElement.prototype.onselect",
+    "MathMLElement.prototype.onselectionchange",
+    "MathMLElement.prototype.onselectstart",
+    "MathMLElement.prototype.onslotchange",
+    "MathMLElement.prototype.onstalled",
+    "MathMLElement.prototype.onsubmit",
+    "MathMLElement.prototype.onsuspend",
+    "MathMLElement.prototype.ontimeupdate",
+    "MathMLElement.prototype.ontoggle",
+    "MathMLElement.prototype.ontransitioncancel",
+    "MathMLElement.prototype.ontransitionend",
+    "MathMLElement.prototype.ontransitionrun",
+    "MathMLElement.prototype.ontransitionstart",
+    "MathMLElement.prototype.onvolumechange",
+    "MathMLElement.prototype.onwaiting",
+    "MathMLElement.prototype.onwebkitanimationend",
+    "MathMLElement.prototype.onwebkitanimationiteration",
+    "MathMLElement.prototype.onwebkitanimationstart",
+    "MathMLElement.prototype.onwebkittransitionend",
+    "MathMLElement.prototype.onwheel",
+    "MathMLElement.prototype.style",
+    "MathMLElement.prototype.tabIndex",
     "MediaCapabilities",
     "MediaCapabilities.prototype",
     "MediaCapabilities.prototype.decodingInfo",
@@ -3828,6 +3936,7 @@
     "PerformanceResourceTiming.prototype.requestStart",
     "PerformanceResourceTiming.prototype.responseEnd",
     "PerformanceResourceTiming.prototype.responseStart",
+    "PerformanceResourceTiming.prototype.responseStatus",
     "PerformanceResourceTiming.prototype.secureConnectionStart",
     "PerformanceResourceTiming.prototype.serverTiming",
     "PerformanceResourceTiming.prototype.toJSON",
@@ -6638,7 +6747,6 @@
     "WheelEvent.prototype.constructor.prototype.eventPhase",
     "WheelEvent.prototype.constructor.prototype.initEvent",
     "WheelEvent.prototype.constructor.prototype.initUIEvent",
-    "WheelEvent.prototype.constructor.prototype.path",
     "WheelEvent.prototype.constructor.prototype.preventDefault",
     "WheelEvent.prototype.constructor.prototype.returnValue",
     "WheelEvent.prototype.constructor.prototype.sourceCapabilities",
```

  
#### 108.0.5359.124 (`2022-12-13`) 
No browser API changes.

  
#### 108.0.5359.98 (`2022-12-7`) 
No browser API changes.

  
#### 108.0.5359.94 (`2022-12-2`) 
No browser API changes.

  
#### 108.0.5359.71 (`2022-11-29`) ⚡
Added 39 APIs, removed 4 (see: [diff](./browser_apis/chrome-stable_107.0.5304.121_to_108.0.5359.71.diff), [json](./browser_apis/chrome-stable_107.0.5304.121_to_108.0.5359.71.json), [full list](./browser_apis/chrome-stable_108.0.5359.71.json))
 ```diff
--- ./browser_apis/chrome-stable_107.0.5304.121.json	2023-01-06 17:09:06.220548061 +0000
+++ ./browser_apis/chrome-stable_108.0.5359.71.json	2023-01-06 17:09:06.220548061 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "107.0.0.0",
-  "browserApiCount": 7549,
+  "version": "108.0.0.0",
+  "browserApiCount": 7584,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -417,6 +417,12 @@
     "CSS.dpcm",
     "CSS.dpi",
     "CSS.dppx",
+    "CSS.dvb",
+    "CSS.dvh",
+    "CSS.dvi",
+    "CSS.dvmax",
+    "CSS.dvmin",
+    "CSS.dvw",
     "CSS.em",
     "CSS.escape",
     "CSS.ex",
@@ -425,6 +431,12 @@
     "CSS.highlights",
     "CSS.in",
     "CSS.kHz",
+    "CSS.lvb",
+    "CSS.lvh",
+    "CSS.lvi",
+    "CSS.lvmax",
+    "CSS.lvmin",
+    "CSS.lvw",
     "CSS.mm",
     "CSS.ms",
     "CSS.number",
@@ -438,8 +450,16 @@
     "CSS.rem",
     "CSS.s",
     "CSS.supports",
+    "CSS.svb",
+    "CSS.svh",
+    "CSS.svi",
+    "CSS.svmax",
+    "CSS.svmin",
+    "CSS.svw",
     "CSS.turn",
+    "CSS.vb",
     "CSS.vh",
+    "CSS.vi",
     "CSS.vmax",
     "CSS.vmin",
     "CSS.vw",
@@ -819,6 +839,9 @@
     "ConstantSourceNode",
     "ConstantSourceNode.prototype",
     "ConstantSourceNode.prototype.offset",
+    "ContentVisibilityAutoStateChangeEvent",
+    "ContentVisibilityAutoStateChangeEvent.prototype",
+    "ContentVisibilityAutoStateChangeEvent.prototype.skipped",
     "ConvolverNode",
     "ConvolverNode.prototype",
     "ConvolverNode.prototype.buffer",
@@ -1632,6 +1655,8 @@
     "HTMLFormElement.prototype.method",
     "HTMLFormElement.prototype.name",
     "HTMLFormElement.prototype.noValidate",
+    "HTMLFormElement.prototype.rel",
+    "HTMLFormElement.prototype.relList",
     "HTMLFormElement.prototype.reportValidity",
     "HTMLFormElement.prototype.requestSubmit",
     "HTMLFormElement.prototype.reset",
@@ -2320,6 +2345,9 @@
     "IIRFilterNode",
     "IIRFilterNode.prototype",
     "IIRFilterNode.prototype.getFrequencyResponse",
+    "IdentityCredential",
+    "IdentityCredential.prototype",
+    "IdentityCredential.prototype.token",
     "IdleDeadline",
     "IdleDeadline.prototype",
     "IdleDeadline.prototype.didTimeout",
@@ -2828,6 +2856,7 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
+    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2842,6 +2871,8 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
+    "MediaSourceHandle",
+    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
@@ -2931,10 +2962,8 @@
     "NavigateEvent.prototype.info",
     "NavigateEvent.prototype.intercept",
     "NavigateEvent.prototype.navigationType",
-    "NavigateEvent.prototype.restoreScroll",
     "NavigateEvent.prototype.scroll",
     "NavigateEvent.prototype.signal",
-    "NavigateEvent.prototype.transitionWhile",
     "NavigateEvent.prototype.userInitiated",
     "Navigation",
     "Navigation.prototype",
@@ -3448,6 +3477,7 @@
     "Option.prototype.constructor.prototype.onchange",
     "Option.prototype.constructor.prototype.onclick",
     "Option.prototype.constructor.prototype.onclose",
+    "Option.prototype.constructor.prototype.oncontentvisibilityautostatechange",
     "Option.prototype.constructor.prototype.oncontextlost",
     "Option.prototype.constructor.prototype.oncontextmenu",
     "Option.prototype.constructor.prototype.oncontextrestored",
@@ -3756,6 +3786,7 @@
     "PerformanceNavigation.prototype.type",
     "PerformanceNavigationTiming",
     "PerformanceNavigationTiming.prototype",
+    "PerformanceNavigationTiming.prototype.activationStart",
     "PerformanceNavigationTiming.prototype.domComplete",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventEnd",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventStart",
@@ -3961,6 +3992,7 @@
     "Proxy",
     "Proxy.revocable",
     "PublicKeyCredential",
+    "PublicKeyCredential.isConditionalMediationAvailable",
     "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable",
     "PublicKeyCredential.prototype",
     "PublicKeyCredential.prototype.authenticatorAttachment",
@@ -5045,6 +5077,7 @@
     "SVGViewElement.prototype.onchange",
     "SVGViewElement.prototype.onclick",
     "SVGViewElement.prototype.onclose",
+    "SVGViewElement.prototype.oncontentvisibilityautostatechange",
     "SVGViewElement.prototype.oncontextlost",
     "SVGViewElement.prototype.oncontextmenu",
     "SVGViewElement.prototype.oncontextrestored",
@@ -6781,6 +6814,7 @@
     "XMLDocument.prototype.onchange",
     "XMLDocument.prototype.onclick",
     "XMLDocument.prototype.onclose",
+    "XMLDocument.prototype.oncontentvisibilityautostatechange",
     "XMLDocument.prototype.oncontextlost",
     "XMLDocument.prototype.oncontextmenu",
     "XMLDocument.prototype.oncontextrestored",
@@ -6838,6 +6872,7 @@
     "XMLDocument.prototype.onpointerover",
     "XMLDocument.prototype.onpointerrawupdate",
     "XMLDocument.prototype.onpointerup",
+    "XMLDocument.prototype.onprerenderingchange",
     "XMLDocument.prototype.onprogress",
     "XMLDocument.prototype.onratechange",
     "XMLDocument.prototype.onreadystatechange",
@@ -6878,6 +6913,7 @@
     "XMLDocument.prototype.plugins",
     "XMLDocument.prototype.pointerLockElement",
     "XMLDocument.prototype.prepend",
+    "XMLDocument.prototype.prerendering",
     "XMLDocument.prototype.queryCommandEnabled",
     "XMLDocument.prototype.queryCommandIndeterm",
     "XMLDocument.prototype.queryCommandState",
@@ -7221,8 +7257,6 @@
     "customElements",
     "decodeURI",
     "decodeURIComponent",
-    "defaultStatus",
-    "defaultstatus",
     "devicePixelRatio",
     "document",
     "encodeURI",
@@ -7279,6 +7313,7 @@
     "onchange",
     "onclick",
     "onclose",
+    "oncontentvisibilityautostatechange",
     "oncontextlost",
     "oncontextmenu",
     "oncontextrestored",
```

  
#### 107.0.5304.121 (`2022-11-24`) 
No browser API changes.

  
#### 107.0.5304.110 (`2022-11-8`) 
No browser API changes.

  
#### 107.0.5304.87 (`2022-10-27`) 
No browser API changes.

  
#### 107.0.5304.68 (`2022-10-25`) ⚡
Added 11 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_106.0.5249.119_to_107.0.5304.68.diff), [json](./browser_apis/chrome-stable_106.0.5249.119_to_107.0.5304.68.json), [full list](./browser_apis/chrome-stable_107.0.5304.68.json))
 ```diff
--- ./browser_apis/chrome-stable_106.0.5249.119.json	2023-01-06 17:09:06.216548057 +0000
+++ ./browser_apis/chrome-stable_107.0.5304.68.json	2023-01-06 17:09:06.220548061 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "106.0.0.0",
-  "browserApiCount": 7538,
+  "version": "107.0.0.0",
+  "browserApiCount": 7549,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1129,6 +1129,8 @@
     "ElementInternals.prototype",
     "ElementInternals.prototype.ariaAtomic",
     "ElementInternals.prototype.ariaAutoComplete",
+    "ElementInternals.prototype.ariaBrailleLabel",
+    "ElementInternals.prototype.ariaBrailleRoleDescription",
     "ElementInternals.prototype.ariaBusy",
     "ElementInternals.prototype.ariaChecked",
     "ElementInternals.prototype.ariaColCount",
@@ -3287,6 +3289,8 @@
     "Option.prototype.constructor.prototype.append",
     "Option.prototype.constructor.prototype.ariaAtomic",
     "Option.prototype.constructor.prototype.ariaAutoComplete",
+    "Option.prototype.constructor.prototype.ariaBrailleLabel",
+    "Option.prototype.constructor.prototype.ariaBrailleRoleDescription",
     "Option.prototype.constructor.prototype.ariaBusy",
     "Option.prototype.constructor.prototype.ariaChecked",
     "Option.prototype.constructor.prototype.ariaColCount",
@@ -3789,6 +3793,7 @@
     "PerformanceResourceTiming.prototype.nextHopProtocol",
     "PerformanceResourceTiming.prototype.redirectEnd",
     "PerformanceResourceTiming.prototype.redirectStart",
+    "PerformanceResourceTiming.prototype.renderBlockingStatus",
     "PerformanceResourceTiming.prototype.requestStart",
     "PerformanceResourceTiming.prototype.responseEnd",
     "PerformanceResourceTiming.prototype.responseStart",
@@ -6987,6 +6992,10 @@
     "XRCPUDepthInformation.prototype.normDepthBufferFromNormView",
     "XRCPUDepthInformation.prototype.rawValueToMeters",
     "XRCPUDepthInformation.prototype.width",
+    "XRCamera",
+    "XRCamera.prototype",
+    "XRCamera.prototype.height",
+    "XRCamera.prototype.width",
     "XRDOMOverlayState",
     "XRDOMOverlayState.prototype",
     "XRDOMOverlayState.prototype.type",
@@ -7110,6 +7119,7 @@
     "XRTransientInputHitTestSource.prototype.cancel",
     "XRView",
     "XRView.prototype",
+    "XRView.prototype.camera",
     "XRView.prototype.eye",
     "XRView.prototype.isFirstPersonObserver",
     "XRView.prototype.projectionMatrix",
@@ -7127,6 +7137,7 @@
     "XRViewport.prototype.y",
     "XRWebGLBinding",
     "XRWebGLBinding.prototype",
+    "XRWebGLBinding.prototype.getCameraImage",
     "XRWebGLBinding.prototype.getDepthInformation",
     "XRWebGLBinding.prototype.getReflectionCubeMap",
     "XRWebGLDepthInformation",
```

  
#### 106.0.5249.119 (`2022-10-11`) 
No browser API changes.

  
#### 106.0.5249.103 (`2022-10-6`) 
No browser API changes.

  
#### 106.0.5249.91 (`2022-9-30`) 
No browser API changes.

  
#### 106.0.5249.61 (`2022-9-27`) ⚡
Added 9 APIs, removed 9 (see: [diff](./browser_apis/chrome-stable_105.0.5195.125_to_106.0.5249.61.diff), [json](./browser_apis/chrome-stable_105.0.5195.125_to_106.0.5249.61.json), [full list](./browser_apis/chrome-stable_106.0.5249.61.json))
 ```diff
--- ./browser_apis/chrome-stable_105.0.5195.125.json	2023-01-06 17:09:06.216548057 +0000
+++ ./browser_apis/chrome-stable_106.0.5249.61.json	2023-01-06 17:09:06.216548057 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "version": "105.0.0.0",
+  "version": "106.0.0.0",
   "browserApiCount": 7538,
   "browserApis": [
     "AbsoluteOrientationSensor",
@@ -234,6 +234,7 @@
     "AudioDecoder.prototype.decode",
     "AudioDecoder.prototype.decodeQueueSize",
     "AudioDecoder.prototype.flush",
+    "AudioDecoder.prototype.ondequeue",
     "AudioDecoder.prototype.reset",
     "AudioDecoder.prototype.state",
     "AudioDestinationNode",
@@ -247,6 +248,7 @@
     "AudioEncoder.prototype.encode",
     "AudioEncoder.prototype.encodeQueueSize",
     "AudioEncoder.prototype.flush",
+    "AudioEncoder.prototype.ondequeue",
     "AudioEncoder.prototype.reset",
     "AudioEncoder.prototype.state",
     "AudioListener",
@@ -2500,6 +2502,8 @@
     "Intl.NumberFormat",
     "Intl.NumberFormat.prototype",
     "Intl.NumberFormat.prototype.format",
+    "Intl.NumberFormat.prototype.formatRange",
+    "Intl.NumberFormat.prototype.formatRangeToParts",
     "Intl.NumberFormat.prototype.formatToParts",
     "Intl.NumberFormat.prototype.resolvedOptions",
     "Intl.NumberFormat.supportedLocalesOf",
@@ -2507,6 +2511,7 @@
     "Intl.PluralRules.prototype",
     "Intl.PluralRules.prototype.resolvedOptions",
     "Intl.PluralRules.prototype.select",
+    "Intl.PluralRules.prototype.selectRange",
     "Intl.PluralRules.supportedLocalesOf",
     "Intl.RelativeTimeFormat",
     "Intl.RelativeTimeFormat.prototype",
@@ -5012,6 +5017,7 @@
     "SVGUseElement.prototype.y",
     "SVGViewElement",
     "SVGViewElement.prototype",
+    "SVGViewElement.prototype.attributeStyleMap",
     "SVGViewElement.prototype.autofocus",
     "SVGViewElement.prototype.blur",
     "SVGViewElement.prototype.className",
@@ -5919,6 +5925,7 @@
     "VideoDecoder.prototype.decode",
     "VideoDecoder.prototype.decodeQueueSize",
     "VideoDecoder.prototype.flush",
+    "VideoDecoder.prototype.ondequeue",
     "VideoDecoder.prototype.reset",
     "VideoDecoder.prototype.state",
     "VideoEncoder",
@@ -5929,6 +5936,7 @@
     "VideoEncoder.prototype.encode",
     "VideoEncoder.prototype.encodeQueueSize",
     "VideoEncoder.prototype.flush",
+    "VideoEncoder.prototype.ondequeue",
     "VideoEncoder.prototype.reset",
     "VideoEncoder.prototype.state",
     "VideoFrame",
@@ -7163,15 +7171,6 @@
     "chrome.csi.prototype",
     "chrome.loadTimes",
     "chrome.loadTimes.prototype",
-    "chrome.runtime",
-    "chrome.runtime.OnInstalledReason",
-    "chrome.runtime.OnRestartRequiredReason",
-    "chrome.runtime.PlatformArch",
-    "chrome.runtime.PlatformNaclArch",
-    "chrome.runtime.PlatformOs",
-    "chrome.runtime.RequestUpdateCheckStatus",
-    "chrome.runtime.connect",
-    "chrome.runtime.sendMessage",
     "clearInterval",
     "clearTimeout",
     "clientInformation",
@@ -7184,6 +7183,7 @@
     "console.context",
     "console.count",
     "console.countReset",
+    "console.createTask",
     "console.debug",
     "console.dir",
     "console.dirxml",
```

  
#### 105.0.5195.125 (`2022-9-13`) 
No browser API changes.

  
#### 105.0.5195.102 (`2022-9-2`) ⚡
Added 0 APIs, removed 4 (see: [diff](./browser_apis/chrome-stable_105.0.5195.52_to_105.0.5195.102.diff), [json](./browser_apis/chrome-stable_105.0.5195.52_to_105.0.5195.102.json), [full list](./browser_apis/chrome-stable_105.0.5195.102.json))
 ```diff
--- ./browser_apis/chrome-stable_105.0.5195.52.json	2023-01-06 17:09:06.216548057 +0000
+++ ./browser_apis/chrome-stable_105.0.5195.102.json	2023-01-06 17:09:06.216548057 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
   "version": "105.0.0.0",
-  "browserApiCount": 7542,
+  "browserApiCount": 7538,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2821,7 +2821,6 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
-    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2829,7 +2828,6 @@
     "MediaSource.prototype.clearLiveSeekableRange",
     "MediaSource.prototype.duration",
     "MediaSource.prototype.endOfStream",
-    "MediaSource.prototype.handle",
     "MediaSource.prototype.onsourceclose",
     "MediaSource.prototype.onsourceended",
     "MediaSource.prototype.onsourceopen",
@@ -2837,8 +2835,6 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
-    "MediaSourceHandle",
-    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
```

  
#### 105.0.5195.52 (`2022-8-30`) ⚡
Added 82 APIs, removed 13 (see: [diff](./browser_apis/chrome-stable_104.0.5112.101_to_105.0.5195.52.diff), [json](./browser_apis/chrome-stable_104.0.5112.101_to_105.0.5195.52.json), [full list](./browser_apis/chrome-stable_105.0.5195.52.json))
 ```diff
--- ./browser_apis/chrome-stable_104.0.5112.101.json	2023-01-06 17:09:06.208548048 +0000
+++ ./browser_apis/chrome-stable_105.0.5195.52.json	2023-01-06 17:09:06.216548057 +0000
@@ -1,20 +1,8 @@
 {
   "browser": "chrome-stable",
-  "version": "104.0.5112.101",
-  "browserApiCount": 7473,
+  "version": "105.0.0.0",
+  "browserApiCount": 7542,
   "browserApis": [
-    "AbortController",
-    "AbortController.prototype",
-    "AbortController.prototype.abort",
-    "AbortController.prototype.signal",
-    "AbortSignal",
-    "AbortSignal.abort",
-    "AbortSignal.prototype",
-    "AbortSignal.prototype.aborted",
-    "AbortSignal.prototype.onabort",
-    "AbortSignal.prototype.reason",
-    "AbortSignal.prototype.throwIfAborted",
-    "AbortSignal.timeout",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
@@ -417,6 +405,12 @@
     "CSS.Q",
     "CSS.ch",
     "CSS.cm",
+    "CSS.cqb",
+    "CSS.cqh",
+    "CSS.cqi",
+    "CSS.cqmax",
+    "CSS.cqmin",
+    "CSS.cqw",
     "CSS.deg",
     "CSS.dpcm",
     "CSS.dpi",
@@ -426,6 +420,7 @@
     "CSS.ex",
     "CSS.fr",
     "CSS.grad",
+    "CSS.highlights",
     "CSS.in",
     "CSS.kHz",
     "CSS.mm",
@@ -449,6 +444,8 @@
     "CSSAnimation",
     "CSSAnimation.prototype",
     "CSSAnimation.prototype.animationName",
+    "CSSContainerRule",
+    "CSSContainerRule.prototype",
     "CSSCounterStyleRule",
     "CSSCounterStyleRule.prototype",
     "CSSCounterStyleRule.prototype.additiveSymbols",
@@ -1788,6 +1785,7 @@
     "HTMLLinkElement",
     "HTMLLinkElement.prototype",
     "HTMLLinkElement.prototype.as",
+    "HTMLLinkElement.prototype.blocking",
     "HTMLLinkElement.prototype.charset",
     "HTMLLinkElement.prototype.crossOrigin",
     "HTMLLinkElement.prototype.disabled",
@@ -1936,6 +1934,7 @@
     "HTMLScriptElement",
     "HTMLScriptElement.prototype",
     "HTMLScriptElement.prototype.async",
+    "HTMLScriptElement.prototype.blocking",
     "HTMLScriptElement.prototype.charset",
     "HTMLScriptElement.prototype.crossOrigin",
     "HTMLScriptElement.prototype.defer",
@@ -1994,6 +1993,7 @@
     "HTMLSpanElement.prototype",
     "HTMLStyleElement",
     "HTMLStyleElement.prototype",
+    "HTMLStyleElement.prototype.blocking",
     "HTMLStyleElement.prototype.disabled",
     "HTMLStyleElement.prototype.media",
     "HTMLStyleElement.prototype.sheet",
@@ -2167,6 +2167,31 @@
     "Headers.prototype.keys",
     "Headers.prototype.set",
     "Headers.prototype.values",
+    "Highlight",
+    "Highlight.prototype",
+    "Highlight.prototype.add",
+    "Highlight.prototype.clear",
+    "Highlight.prototype.delete",
+    "Highlight.prototype.entries",
+    "Highlight.prototype.forEach",
+    "Highlight.prototype.has",
+    "Highlight.prototype.keys",
+    "Highlight.prototype.priority",
+    "Highlight.prototype.size",
+    "Highlight.prototype.type",
+    "Highlight.prototype.values",
+    "HighlightRegistry",
+    "HighlightRegistry.prototype",
+    "HighlightRegistry.prototype.clear",
+    "HighlightRegistry.prototype.delete",
+    "HighlightRegistry.prototype.entries",
+    "HighlightRegistry.prototype.forEach",
+    "HighlightRegistry.prototype.get",
+    "HighlightRegistry.prototype.has",
+    "HighlightRegistry.prototype.keys",
+    "HighlightRegistry.prototype.set",
+    "HighlightRegistry.prototype.size",
+    "HighlightRegistry.prototype.values",
     "History",
     "History.prototype",
     "History.prototype.back",
@@ -2796,6 +2821,7 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
+    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2803,6 +2829,7 @@
     "MediaSource.prototype.clearLiveSeekableRange",
     "MediaSource.prototype.duration",
     "MediaSource.prototype.endOfStream",
+    "MediaSource.prototype.handle",
     "MediaSource.prototype.onsourceclose",
     "MediaSource.prototype.onsourceended",
     "MediaSource.prototype.onsourceopen",
@@ -2810,6 +2837,8 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
+    "MediaSourceHandle",
+    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
@@ -2890,14 +2919,17 @@
     "NamedNodeMap.prototype.setNamedItemNS",
     "NavigateEvent",
     "NavigateEvent.prototype",
+    "NavigateEvent.prototype.canIntercept",
     "NavigateEvent.prototype.canTransition",
     "NavigateEvent.prototype.destination",
     "NavigateEvent.prototype.downloadRequest",
     "NavigateEvent.prototype.formData",
     "NavigateEvent.prototype.hashChange",
     "NavigateEvent.prototype.info",
+    "NavigateEvent.prototype.intercept",
     "NavigateEvent.prototype.navigationType",
     "NavigateEvent.prototype.restoreScroll",
+    "NavigateEvent.prototype.scroll",
     "NavigateEvent.prototype.signal",
     "NavigateEvent.prototype.transitionWhile",
     "NavigateEvent.prototype.userInitiated",
@@ -3012,6 +3044,7 @@
     "Navigator.prototype.webkitGetUserMedia",
     "Navigator.prototype.webkitPersistentStorage",
     "Navigator.prototype.webkitTemporaryStorage",
+    "Navigator.prototype.windowControlsOverlay",
     "Navigator.prototype.xr",
     "NavigatorManagedData",
     "NavigatorManagedData.prototype",
@@ -3299,6 +3332,7 @@
     "Option.prototype.constructor.prototype.autofocus",
     "Option.prototype.constructor.prototype.before",
     "Option.prototype.constructor.prototype.blur",
+    "Option.prototype.constructor.prototype.checkVisibility",
     "Option.prototype.constructor.prototype.childElementCount",
     "Option.prototype.constructor.prototype.children",
     "Option.prototype.constructor.prototype.classList",
@@ -3398,6 +3432,7 @@
     "Option.prototype.constructor.prototype.onauxclick",
     "Option.prototype.constructor.prototype.onbeforecopy",
     "Option.prototype.constructor.prototype.onbeforecut",
+    "Option.prototype.constructor.prototype.onbeforeinput",
     "Option.prototype.constructor.prototype.onbeforematch",
     "Option.prototype.constructor.prototype.onbeforepaste",
     "Option.prototype.constructor.prototype.onbeforexrselect",
@@ -3524,6 +3559,7 @@
     "Option.prototype.constructor.prototype.setAttributeNS",
     "Option.prototype.constructor.prototype.setAttributeNode",
     "Option.prototype.constructor.prototype.setAttributeNodeNS",
+    "Option.prototype.constructor.prototype.setHTML",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
     "Option.prototype.constructor.prototype.slot",
@@ -4263,6 +4299,7 @@
     "Request.prototype",
     "Request.prototype.arrayBuffer",
     "Request.prototype.blob",
+    "Request.prototype.body",
     "Request.prototype.bodyUsed",
     "Request.prototype.cache",
     "Request.prototype.clone",
@@ -4300,6 +4337,7 @@
     "ResizeObserverSize.prototype.inlineSize",
     "Response",
     "Response.error",
+    "Response.json",
     "Response.prototype",
     "Response.prototype.arrayBuffer",
     "Response.prototype.blob",
@@ -4990,6 +5028,7 @@
     "SVGViewElement.prototype.onanimationiteration",
     "SVGViewElement.prototype.onanimationstart",
     "SVGViewElement.prototype.onauxclick",
+    "SVGViewElement.prototype.onbeforeinput",
     "SVGViewElement.prototype.onbeforematch",
     "SVGViewElement.prototype.onbeforexrselect",
     "SVGViewElement.prototype.onblur",
@@ -5086,6 +5125,10 @@
     "SVGViewElement.prototype.viewBox",
     "SVGViewElement.prototype.viewportElement",
     "SVGViewElement.prototype.zoomAndPan",
+    "Sanitizer",
+    "Sanitizer.getDefaultConfiguration",
+    "Sanitizer.prototype",
+    "Sanitizer.prototype.getConfiguration",
     "Scheduler",
     "Scheduler.prototype",
     "Scheduler.prototype.postTask",
@@ -5478,14 +5521,24 @@
     "TaskAttributionTiming.prototype.toJSON",
     "TaskController",
     "TaskController.prototype",
+    "TaskController.prototype.abort",
+    "TaskController.prototype.constructor",
     "TaskController.prototype.setPriority",
+    "TaskController.prototype.signal",
     "TaskPriorityChangeEvent",
     "TaskPriorityChangeEvent.prototype",
     "TaskPriorityChangeEvent.prototype.previousPriority",
     "TaskSignal",
     "TaskSignal.prototype",
+    "TaskSignal.prototype.aborted",
+    "TaskSignal.prototype.constructor",
+    "TaskSignal.prototype.constructor.abort",
+    "TaskSignal.prototype.constructor.timeout",
+    "TaskSignal.prototype.onabort",
     "TaskSignal.prototype.onprioritychange",
     "TaskSignal.prototype.priority",
+    "TaskSignal.prototype.reason",
+    "TaskSignal.prototype.throwIfAborted",
     "Text",
     "Text.prototype",
     "Text.prototype.after",
@@ -5603,6 +5656,12 @@
     "TransformStream.prototype",
     "TransformStream.prototype.readable",
     "TransformStream.prototype.writable",
+    "TransformStreamDefaultController",
+    "TransformStreamDefaultController.prototype",
+    "TransformStreamDefaultController.prototype.desiredSize",
+    "TransformStreamDefaultController.prototype.enqueue",
+    "TransformStreamDefaultController.prototype.error",
+    "TransformStreamDefaultController.prototype.terminate",
     "TransitionEvent",
     "TransitionEvent.prototype",
     "TransitionEvent.prototype.elapsedTime",
@@ -5959,7 +6018,6 @@
     "WebAssembly.CompileError.prototype",
     "WebAssembly.Exception",
     "WebAssembly.Exception.prototype",
-    "WebAssembly.Exception.prototype.constructor",
     "WebAssembly.Exception.prototype.getArg",
     "WebAssembly.Exception.prototype.is",
     "WebAssembly.Global",
@@ -6579,6 +6637,15 @@
     "WheelEvent.prototype.y",
     "Window",
     "Window.prototype",
+    "WindowControlsOverlay",
+    "WindowControlsOverlay.prototype",
+    "WindowControlsOverlay.prototype.getTitlebarAreaRect",
+    "WindowControlsOverlay.prototype.ongeometrychange",
+    "WindowControlsOverlay.prototype.visible",
+    "WindowControlsOverlayGeometryChangeEvent",
+    "WindowControlsOverlayGeometryChangeEvent.prototype",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.titlebarAreaRect",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.visible",
     "Worker",
     "Worker.prototype",
     "Worker.prototype.onerror",
@@ -6694,6 +6761,7 @@
     "XMLDocument.prototype.onauxclick",
     "XMLDocument.prototype.onbeforecopy",
     "XMLDocument.prototype.onbeforecut",
+    "XMLDocument.prototype.onbeforeinput",
     "XMLDocument.prototype.onbeforematch",
     "XMLDocument.prototype.onbeforepaste",
     "XMLDocument.prototype.onbeforexrselect",
@@ -7191,6 +7259,7 @@
     "onanimationstart",
     "onappinstalled",
     "onauxclick",
+    "onbeforeinput",
     "onbeforeinstallprompt",
     "onbeforematch",
     "onbeforeprint",
```

  
#### 104.0.5112.101 (`2022-8-16`) 
No browser API changes.

  
#### 104.0.5112.79 (`2022-8-2`) ⚡
Added 10 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_103.0.5060.134_to_104.0.5112.79.diff), [json](./browser_apis/chrome-stable_103.0.5060.134_to_104.0.5112.79.json), [full list](./browser_apis/chrome-stable_104.0.5112.79.json))
 ```diff
--- ./browser_apis/chrome-stable_103.0.5060.134.json	2023-01-06 17:09:06.208548048 +0000
+++ ./browser_apis/chrome-stable_104.0.5112.79.json	2023-01-06 17:09:06.208548048 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "103.0.5060.134",
-  "browserApiCount": 7463,
+  "version": "104.0.5112.79",
+  "browserApiCount": 7473,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -403,6 +403,9 @@
     "BroadcastChannel.prototype.onmessage",
     "BroadcastChannel.prototype.onmessageerror",
     "BroadcastChannel.prototype.postMessage",
+    "BrowserCaptureMediaStreamTrack",
+    "BrowserCaptureMediaStreamTrack.prototype",
+    "BrowserCaptureMediaStreamTrack.prototype.cropTo",
     "ByteLengthQueuingStrategy",
     "ByteLengthQueuingStrategy.prototype",
     "ByteLengthQueuingStrategy.prototype.highWaterMark",
@@ -851,6 +854,9 @@
     "CredentialsContainer.prototype.get",
     "CredentialsContainer.prototype.preventSilentAccess",
     "CredentialsContainer.prototype.store",
+    "CropTarget",
+    "CropTarget.fromElement",
+    "CropTarget.prototype",
     "Crypto",
     "Crypto.prototype",
     "Crypto.prototype.getRandomValues",
@@ -6068,6 +6074,7 @@
     "WebGL2RenderingContext.prototype.drawElements",
     "WebGL2RenderingContext.prototype.drawElementsInstanced",
     "WebGL2RenderingContext.prototype.drawRangeElements",
+    "WebGL2RenderingContext.prototype.drawingBufferColorSpace",
     "WebGL2RenderingContext.prototype.drawingBufferHeight",
     "WebGL2RenderingContext.prototype.drawingBufferWidth",
     "WebGL2RenderingContext.prototype.enable",
@@ -6200,6 +6207,7 @@
     "WebGL2RenderingContext.prototype.uniformMatrix4fv",
     "WebGL2RenderingContext.prototype.uniformMatrix4x2fv",
     "WebGL2RenderingContext.prototype.uniformMatrix4x3fv",
+    "WebGL2RenderingContext.prototype.unpackColorSpace",
     "WebGL2RenderingContext.prototype.useProgram",
     "WebGL2RenderingContext.prototype.validateProgram",
     "WebGL2RenderingContext.prototype.vertexAttrib1f",
@@ -6286,6 +6294,7 @@
     "WebGLRenderingContext.prototype.disableVertexAttribArray",
     "WebGLRenderingContext.prototype.drawArrays",
     "WebGLRenderingContext.prototype.drawElements",
+    "WebGLRenderingContext.prototype.drawingBufferColorSpace",
     "WebGLRenderingContext.prototype.drawingBufferHeight",
     "WebGLRenderingContext.prototype.drawingBufferWidth",
     "WebGLRenderingContext.prototype.enable",
@@ -6367,6 +6376,7 @@
     "WebGLRenderingContext.prototype.uniformMatrix2fv",
     "WebGLRenderingContext.prototype.uniformMatrix3fv",
     "WebGLRenderingContext.prototype.uniformMatrix4fv",
+    "WebGLRenderingContext.prototype.unpackColorSpace",
     "WebGLRenderingContext.prototype.useProgram",
     "WebGLRenderingContext.prototype.validateProgram",
     "WebGLRenderingContext.prototype.vertexAttrib1f",
```

  
#### 103.0.5060.134 (`2022-7-19`) 
No browser API changes.

  
#### 103.0.5060.114 (`2022-7-4`) 
No browser API changes.

  
### chrome-unstable
  
#### 114.0.5696.0 (`2023-4-6`) ⚡
Added 22 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_113.0.5672.24_to_114.0.5696.0.diff), [json](./browser_apis/chrome-unstable_113.0.5672.24_to_114.0.5696.0.json), [full list](./browser_apis/chrome-unstable_114.0.5696.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_113.0.5672.24.json	2023-04-13 09:11:42.243626955 +0000
+++ ./browser_apis/chrome-unstable_114.0.5696.0.json	2023-04-13 09:12:01.931710633 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7984,
+  "browserApiCount": 8006,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -117,10 +117,13 @@
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
     "ArrayBuffer.prototype.byteLength",
+    "ArrayBuffer.prototype.detached",
     "ArrayBuffer.prototype.maxByteLength",
     "ArrayBuffer.prototype.resizable",
     "ArrayBuffer.prototype.resize",
     "ArrayBuffer.prototype.slice",
+    "ArrayBuffer.prototype.transfer",
+    "ArrayBuffer.prototype.transferToFixedLength",
     "Atomics",
     "Atomics.add",
     "Atomics.and",
@@ -1834,6 +1837,8 @@
     "HTMLButtonElement.prototype.formTarget",
     "HTMLButtonElement.prototype.labels",
     "HTMLButtonElement.prototype.name",
+    "HTMLButtonElement.prototype.popoverTargetAction",
+    "HTMLButtonElement.prototype.popoverTargetElement",
     "HTMLButtonElement.prototype.reportValidity",
     "HTMLButtonElement.prototype.setCustomValidity",
     "HTMLButtonElement.prototype.type",
@@ -2037,6 +2042,8 @@
     "HTMLInputElement.prototype.name",
     "HTMLInputElement.prototype.pattern",
     "HTMLInputElement.prototype.placeholder",
+    "HTMLInputElement.prototype.popoverTargetAction",
+    "HTMLInputElement.prototype.popoverTargetElement",
     "HTMLInputElement.prototype.readOnly",
     "HTMLInputElement.prototype.reportValidity",
     "HTMLInputElement.prototype.required",
@@ -2834,7 +2841,9 @@
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
     "JSON",
+    "JSON.isRawJSON",
     "JSON.parse",
+    "JSON.rawJSON",
     "JSON.stringify",
     "Keyboard",
     "Keyboard.prototype",
@@ -3027,6 +3036,7 @@
     "MathMLElement.prototype.onauxclick",
     "MathMLElement.prototype.onbeforeinput",
     "MathMLElement.prototype.onbeforematch",
+    "MathMLElement.prototype.onbeforetoggle",
     "MathMLElement.prototype.onbeforexrselect",
     "MathMLElement.prototype.onblur",
     "MathMLElement.prototype.oncancel",
@@ -3833,6 +3843,7 @@
     "Option.prototype.constructor.prototype.hasAttributes",
     "Option.prototype.constructor.prototype.hasPointerCapture",
     "Option.prototype.constructor.prototype.hidden",
+    "Option.prototype.constructor.prototype.hidePopover",
     "Option.prototype.constructor.prototype.id",
     "Option.prototype.constructor.prototype.inert",
     "Option.prototype.constructor.prototype.innerHTML",
@@ -3864,6 +3875,7 @@
     "Option.prototype.constructor.prototype.onbeforeinput",
     "Option.prototype.constructor.prototype.onbeforematch",
     "Option.prototype.constructor.prototype.onbeforepaste",
+    "Option.prototype.constructor.prototype.onbeforetoggle",
     "Option.prototype.constructor.prototype.onbeforexrselect",
     "Option.prototype.constructor.prototype.onblur",
     "Option.prototype.constructor.prototype.oncancel",
@@ -3961,6 +3973,7 @@
     "Option.prototype.constructor.prototype.outerHTML",
     "Option.prototype.constructor.prototype.outerText",
     "Option.prototype.constructor.prototype.part",
+    "Option.prototype.constructor.prototype.popover",
     "Option.prototype.constructor.prototype.prefix",
     "Option.prototype.constructor.prototype.prepend",
     "Option.prototype.constructor.prototype.previousElementSibling",
@@ -3992,6 +4005,7 @@
     "Option.prototype.constructor.prototype.setHTML",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
+    "Option.prototype.constructor.prototype.showPopover",
     "Option.prototype.constructor.prototype.slot",
     "Option.prototype.constructor.prototype.spellcheck",
     "Option.prototype.constructor.prototype.style",
@@ -3999,6 +4013,7 @@
     "Option.prototype.constructor.prototype.tagName",
     "Option.prototype.constructor.prototype.title",
     "Option.prototype.constructor.prototype.toggleAttribute",
+    "Option.prototype.constructor.prototype.togglePopover",
     "Option.prototype.constructor.prototype.translate",
     "Option.prototype.constructor.prototype.virtualKeyboardPolicy",
     "Option.prototype.constructor.prototype.webkitMatchesSelector",
@@ -5455,6 +5470,7 @@
     "SVGViewElement.prototype.onauxclick",
     "SVGViewElement.prototype.onbeforeinput",
     "SVGViewElement.prototype.onbeforematch",
+    "SVGViewElement.prototype.onbeforetoggle",
     "SVGViewElement.prototype.onbeforexrselect",
     "SVGViewElement.prototype.onblur",
     "SVGViewElement.prototype.oncancel",
@@ -6050,6 +6066,10 @@
     "TimeRanges.prototype.end",
     "TimeRanges.prototype.length",
     "TimeRanges.prototype.start",
+    "ToggleEvent",
+    "ToggleEvent.prototype",
+    "ToggleEvent.prototype.newState",
+    "ToggleEvent.prototype.oldState",
     "Touch",
     "Touch.prototype",
     "Touch.prototype.clientX",
@@ -7203,6 +7223,7 @@
     "XMLDocument.prototype.onbeforeinput",
     "XMLDocument.prototype.onbeforematch",
     "XMLDocument.prototype.onbeforepaste",
+    "XMLDocument.prototype.onbeforetoggle",
     "XMLDocument.prototype.onbeforexrselect",
     "XMLDocument.prototype.onblur",
     "XMLDocument.prototype.oncancel",
@@ -7704,6 +7725,7 @@
     "onbeforeinstallprompt",
     "onbeforematch",
     "onbeforeprint",
+    "onbeforetoggle",
     "onbeforeunload",
     "onbeforexrselect",
     "onblur",
```

  
#### 113.0.5672.24 (`2023-4-4`) 
No browser API changes.

  
#### 113.0.5672.12 (`2023-3-30`) 
No browser API changes.

  
#### 113.0.5668.0 (`2023-3-24`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_113.0.5653.0_to_113.0.5668.0.diff), [json](./browser_apis/chrome-unstable_113.0.5653.0_to_113.0.5668.0.json), [full list](./browser_apis/chrome-unstable_113.0.5668.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_113.0.5653.0.json	2023-04-13 09:10:39.055358588 +0000
+++ ./browser_apis/chrome-unstable_113.0.5668.0.json	2023-04-13 09:11:00.787446258 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7983,
+  "browserApiCount": 7984,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2459,6 +2459,7 @@
     "Headers.prototype.entries",
     "Headers.prototype.forEach",
     "Headers.prototype.get",
+    "Headers.prototype.getSetCookie",
     "Headers.prototype.has",
     "Headers.prototype.keys",
     "Headers.prototype.set",
```

  
#### 113.0.5653.0 (`2023-3-16`) ⚡
Added 266 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_113.0.5638.0_to_113.0.5653.0.diff), [json](./browser_apis/chrome-unstable_113.0.5638.0_to_113.0.5653.0.json), [full list](./browser_apis/chrome-unstable_113.0.5653.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_113.0.5638.0.json	2023-04-13 09:10:18.355267823 +0000
+++ ./browser_apis/chrome-unstable_113.0.5653.0.json	2023-04-13 09:10:39.055358588 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7717,
+  "browserApiCount": 7983,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1380,6 +1380,271 @@
     "FormDataEvent.prototype.formData",
     "FragmentDirective",
     "FragmentDirective.prototype",
+    "GPU",
+    "GPU.prototype",
+    "GPU.prototype.getPreferredCanvasFormat",
+    "GPU.prototype.requestAdapter",
+    "GPUAdapter",
+    "GPUAdapter.prototype",
+    "GPUAdapter.prototype.features",
+    "GPUAdapter.prototype.isFallbackAdapter",
+    "GPUAdapter.prototype.limits",
+    "GPUAdapter.prototype.requestAdapterInfo",
+    "GPUAdapter.prototype.requestDevice",
+    "GPUAdapterInfo",
+    "GPUAdapterInfo.prototype",
+    "GPUAdapterInfo.prototype.architecture",
+    "GPUAdapterInfo.prototype.description",
+    "GPUAdapterInfo.prototype.device",
+    "GPUAdapterInfo.prototype.vendor",
+    "GPUBindGroup",
+    "GPUBindGroup.prototype",
+    "GPUBindGroup.prototype.label",
+    "GPUBindGroupLayout",
+    "GPUBindGroupLayout.prototype",
+    "GPUBindGroupLayout.prototype.label",
+    "GPUBuffer",
+    "GPUBuffer.prototype",
+    "GPUBuffer.prototype.destroy",
+    "GPUBuffer.prototype.getMappedRange",
+    "GPUBuffer.prototype.label",
+    "GPUBuffer.prototype.mapAsync",
+    "GPUBuffer.prototype.mapState",
+    "GPUBuffer.prototype.size",
+    "GPUBuffer.prototype.unmap",
+    "GPUBuffer.prototype.usage",
+    "GPUBufferUsage",
+    "GPUCanvasContext",
+    "GPUCanvasContext.prototype",
+    "GPUCanvasContext.prototype.canvas",
+    "GPUCanvasContext.prototype.configure",
+    "GPUCanvasContext.prototype.getCurrentTexture",
+    "GPUCanvasContext.prototype.unconfigure",
+    "GPUColorWrite",
+    "GPUCommandBuffer",
+    "GPUCommandBuffer.prototype",
+    "GPUCommandBuffer.prototype.label",
+    "GPUCommandEncoder",
+    "GPUCommandEncoder.prototype",
+    "GPUCommandEncoder.prototype.beginComputePass",
+    "GPUCommandEncoder.prototype.beginRenderPass",
+    "GPUCommandEncoder.prototype.clearBuffer",
+    "GPUCommandEncoder.prototype.copyBufferToBuffer",
+    "GPUCommandEncoder.prototype.copyBufferToTexture",
+    "GPUCommandEncoder.prototype.copyTextureToBuffer",
+    "GPUCommandEncoder.prototype.copyTextureToTexture",
+    "GPUCommandEncoder.prototype.finish",
+    "GPUCommandEncoder.prototype.insertDebugMarker",
+    "GPUCommandEncoder.prototype.label",
+    "GPUCommandEncoder.prototype.popDebugGroup",
+    "GPUCommandEncoder.prototype.pushDebugGroup",
+    "GPUCommandEncoder.prototype.resolveQuerySet",
+    "GPUCommandEncoder.prototype.writeTimestamp",
+    "GPUCompilationInfo",
+    "GPUCompilationInfo.prototype",
+    "GPUCompilationInfo.prototype.messages",
+    "GPUCompilationMessage",
+    "GPUCompilationMessage.prototype",
+    "GPUCompilationMessage.prototype.length",
+    "GPUCompilationMessage.prototype.lineNum",
+    "GPUCompilationMessage.prototype.linePos",
+    "GPUCompilationMessage.prototype.message",
+    "GPUCompilationMessage.prototype.offset",
+    "GPUCompilationMessage.prototype.type",
+    "GPUComputePassEncoder",
+    "GPUComputePassEncoder.prototype",
+    "GPUComputePassEncoder.prototype.dispatchWorkgroups",
+    "GPUComputePassEncoder.prototype.dispatchWorkgroupsIndirect",
+    "GPUComputePassEncoder.prototype.end",
+    "GPUComputePassEncoder.prototype.insertDebugMarker",
+    "GPUComputePassEncoder.prototype.label",
+    "GPUComputePassEncoder.prototype.popDebugGroup",
+    "GPUComputePassEncoder.prototype.pushDebugGroup",
+    "GPUComputePassEncoder.prototype.setBindGroup",
+    "GPUComputePassEncoder.prototype.setPipeline",
+    "GPUComputePassEncoder.prototype.writeTimestamp",
+    "GPUComputePipeline",
+    "GPUComputePipeline.prototype",
+    "GPUComputePipeline.prototype.getBindGroupLayout",
+    "GPUComputePipeline.prototype.label",
+    "GPUDevice",
+    "GPUDevice.prototype",
+    "GPUDevice.prototype.createBindGroup",
+    "GPUDevice.prototype.createBindGroupLayout",
+    "GPUDevice.prototype.createBuffer",
+    "GPUDevice.prototype.createCommandEncoder",
+    "GPUDevice.prototype.createComputePipeline",
+    "GPUDevice.prototype.createComputePipelineAsync",
+    "GPUDevice.prototype.createPipelineLayout",
+    "GPUDevice.prototype.createQuerySet",
+    "GPUDevice.prototype.createRenderBundleEncoder",
+    "GPUDevice.prototype.createRenderPipeline",
+    "GPUDevice.prototype.createRenderPipelineAsync",
+    "GPUDevice.prototype.createSampler",
+    "GPUDevice.prototype.createShaderModule",
+    "GPUDevice.prototype.createTexture",
+    "GPUDevice.prototype.destroy",
+    "GPUDevice.prototype.features",
+    "GPUDevice.prototype.importExternalTexture",
+    "GPUDevice.prototype.label",
+    "GPUDevice.prototype.limits",
+    "GPUDevice.prototype.lost",
+    "GPUDevice.prototype.onuncapturederror",
+    "GPUDevice.prototype.popErrorScope",
+    "GPUDevice.prototype.pushErrorScope",
+    "GPUDevice.prototype.queue",
+    "GPUDeviceLostInfo",
+    "GPUDeviceLostInfo.prototype",
+    "GPUDeviceLostInfo.prototype.message",
+    "GPUDeviceLostInfo.prototype.reason",
+    "GPUError",
+    "GPUError.prototype",
+    "GPUError.prototype.message",
+    "GPUExternalTexture",
+    "GPUExternalTexture.prototype",
+    "GPUExternalTexture.prototype.label",
+    "GPUInternalError",
+    "GPUInternalError.prototype",
+    "GPUMapMode",
+    "GPUOutOfMemoryError",
+    "GPUOutOfMemoryError.prototype",
+    "GPUPipelineError",
+    "GPUPipelineError.prototype",
+    "GPUPipelineError.prototype.reason",
+    "GPUPipelineLayout",
+    "GPUPipelineLayout.prototype",
+    "GPUPipelineLayout.prototype.label",
+    "GPUQuerySet",
+    "GPUQuerySet.prototype",
+    "GPUQuerySet.prototype.count",
+    "GPUQuerySet.prototype.destroy",
+    "GPUQuerySet.prototype.label",
+    "GPUQuerySet.prototype.type",
+    "GPUQueue",
+    "GPUQueue.prototype",
+    "GPUQueue.prototype.copyExternalImageToTexture",
+    "GPUQueue.prototype.label",
+    "GPUQueue.prototype.onSubmittedWorkDone",
+    "GPUQueue.prototype.submit",
+    "GPUQueue.prototype.writeBuffer",
+    "GPUQueue.prototype.writeTexture",
+    "GPURenderBundle",
+    "GPURenderBundle.prototype",
+    "GPURenderBundle.prototype.label",
+    "GPURenderBundleEncoder",
+    "GPURenderBundleEncoder.prototype",
+    "GPURenderBundleEncoder.prototype.draw",
+    "GPURenderBundleEncoder.prototype.drawIndexed",
+    "GPURenderBundleEncoder.prototype.drawIndexedIndirect",
+    "GPURenderBundleEncoder.prototype.drawIndirect",
+    "GPURenderBundleEncoder.prototype.finish",
+    "GPURenderBundleEncoder.prototype.insertDebugMarker",
+    "GPURenderBundleEncoder.prototype.label",
+    "GPURenderBundleEncoder.prototype.popDebugGroup",
+    "GPURenderBundleEncoder.prototype.pushDebugGroup",
+    "GPURenderBundleEncoder.prototype.setBindGroup",
+    "GPURenderBundleEncoder.prototype.setIndexBuffer",
+    "GPURenderBundleEncoder.prototype.setPipeline",
+    "GPURenderBundleEncoder.prototype.setVertexBuffer",
+    "GPURenderPassEncoder",
+    "GPURenderPassEncoder.prototype",
+    "GPURenderPassEncoder.prototype.beginOcclusionQuery",
+    "GPURenderPassEncoder.prototype.draw",
+    "GPURenderPassEncoder.prototype.drawIndexed",
+    "GPURenderPassEncoder.prototype.drawIndexedIndirect",
+    "GPURenderPassEncoder.prototype.drawIndirect",
+    "GPURenderPassEncoder.prototype.end",
+    "GPURenderPassEncoder.prototype.endOcclusionQuery",
+    "GPURenderPassEncoder.prototype.executeBundles",
+    "GPURenderPassEncoder.prototype.insertDebugMarker",
+    "GPURenderPassEncoder.prototype.label",
+    "GPURenderPassEncoder.prototype.popDebugGroup",
+    "GPURenderPassEncoder.prototype.pushDebugGroup",
+    "GPURenderPassEncoder.prototype.setBindGroup",
+    "GPURenderPassEncoder.prototype.setBlendConstant",
+    "GPURenderPassEncoder.prototype.setIndexBuffer",
+    "GPURenderPassEncoder.prototype.setPipeline",
+    "GPURenderPassEncoder.prototype.setScissorRect",
+    "GPURenderPassEncoder.prototype.setStencilReference",
+    "GPURenderPassEncoder.prototype.setVertexBuffer",
+    "GPURenderPassEncoder.prototype.setViewport",
+    "GPURenderPassEncoder.prototype.writeTimestamp",
+    "GPURenderPipeline",
+    "GPURenderPipeline.prototype",
+    "GPURenderPipeline.prototype.getBindGroupLayout",
+    "GPURenderPipeline.prototype.label",
+    "GPUSampler",
+    "GPUSampler.prototype",
+    "GPUSampler.prototype.label",
+    "GPUShaderModule",
+    "GPUShaderModule.prototype",
+    "GPUShaderModule.prototype.getCompilationInfo",
+    "GPUShaderModule.prototype.label",
+    "GPUShaderStage",
+    "GPUSupportedFeatures",
+    "GPUSupportedFeatures.prototype",
+    "GPUSupportedFeatures.prototype.entries",
+    "GPUSupportedFeatures.prototype.forEach",
+    "GPUSupportedFeatures.prototype.has",
+    "GPUSupportedFeatures.prototype.keys",
+    "GPUSupportedFeatures.prototype.size",
+    "GPUSupportedFeatures.prototype.values",
+    "GPUSupportedLimits",
+    "GPUSupportedLimits.prototype",
+    "GPUSupportedLimits.prototype.maxBindGroups",
+    "GPUSupportedLimits.prototype.maxBindingsPerBindGroup",
+    "GPUSupportedLimits.prototype.maxBufferSize",
+    "GPUSupportedLimits.prototype.maxColorAttachmentBytesPerSample",
+    "GPUSupportedLimits.prototype.maxColorAttachments",
+    "GPUSupportedLimits.prototype.maxComputeInvocationsPerWorkgroup",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeX",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeY",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeZ",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupStorageSize",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupsPerDimension",
+    "GPUSupportedLimits.prototype.maxDynamicStorageBuffersPerPipelineLayout",
+    "GPUSupportedLimits.prototype.maxDynamicUniformBuffersPerPipelineLayout",
+    "GPUSupportedLimits.prototype.maxFragmentCombinedOutputResources",
+    "GPUSupportedLimits.prototype.maxInterStageShaderComponents",
+    "GPUSupportedLimits.prototype.maxInterStageShaderVariables",
+    "GPUSupportedLimits.prototype.maxSampledTexturesPerShaderStage",
+    "GPUSupportedLimits.prototype.maxSamplersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxStorageBufferBindingSize",
+    "GPUSupportedLimits.prototype.maxStorageBuffersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxStorageTexturesPerShaderStage",
+    "GPUSupportedLimits.prototype.maxTextureArrayLayers",
+    "GPUSupportedLimits.prototype.maxTextureDimension1D",
+    "GPUSupportedLimits.prototype.maxTextureDimension2D",
+    "GPUSupportedLimits.prototype.maxTextureDimension3D",
+    "GPUSupportedLimits.prototype.maxUniformBufferBindingSize",
+    "GPUSupportedLimits.prototype.maxUniformBuffersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxVertexAttributes",
+    "GPUSupportedLimits.prototype.maxVertexBufferArrayStride",
+    "GPUSupportedLimits.prototype.maxVertexBuffers",
+    "GPUSupportedLimits.prototype.minStorageBufferOffsetAlignment",
+    "GPUSupportedLimits.prototype.minUniformBufferOffsetAlignment",
+    "GPUTexture",
+    "GPUTexture.prototype",
+    "GPUTexture.prototype.createView",
+    "GPUTexture.prototype.depthOrArrayLayers",
+    "GPUTexture.prototype.destroy",
+    "GPUTexture.prototype.dimension",
+    "GPUTexture.prototype.format",
+    "GPUTexture.prototype.height",
+    "GPUTexture.prototype.label",
+    "GPUTexture.prototype.mipLevelCount",
+    "GPUTexture.prototype.sampleCount",
+    "GPUTexture.prototype.usage",
+    "GPUTexture.prototype.width",
+    "GPUTextureUsage",
+    "GPUTextureView",
+    "GPUTextureView.prototype",
+    "GPUTextureView.prototype.label",
+    "GPUUncapturedErrorEvent",
+    "GPUUncapturedErrorEvent.prototype",
+    "GPUUncapturedErrorEvent.prototype.error",
+    "GPUValidationError",
+    "GPUValidationError.prototype",
     "GainNode",
     "GainNode.prototype",
     "GainNode.prototype.gain",
@@ -3159,6 +3424,7 @@
     "Navigator.prototype.getGamepads",
     "Navigator.prototype.getInstalledRelatedApps",
     "Navigator.prototype.getUserMedia",
+    "Navigator.prototype.gpu",
     "Navigator.prototype.hardwareConcurrency",
     "Navigator.prototype.hid",
     "Navigator.prototype.ink",
```

  
#### 113.0.5638.0 (`2023-3-9`) ⚡
Added 1 APIs, removed 4 (see: [diff](./browser_apis/chrome-unstable_112.0.5615.20_to_113.0.5638.0.diff), [json](./browser_apis/chrome-unstable_112.0.5615.20_to_113.0.5638.0.json), [full list](./browser_apis/chrome-unstable_113.0.5638.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_112.0.5615.20.json	2023-04-13 09:09:57.531179757 +0000
+++ ./browser_apis/chrome-unstable_113.0.5638.0.json	2023-04-13 09:10:18.355267823 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7720,
+  "browserApiCount": 7717,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -720,8 +720,6 @@
     "CanvasCaptureMediaStreamTrack.prototype",
     "CanvasCaptureMediaStreamTrack.prototype.canvas",
     "CanvasCaptureMediaStreamTrack.prototype.requestFrame",
-    "CanvasFilter",
-    "CanvasFilter.prototype",
     "CanvasGradient",
     "CanvasGradient.prototype",
     "CanvasGradient.prototype.addColorStop",
@@ -3760,8 +3758,6 @@
     "OverconstrainedError",
     "OverconstrainedError.prototype",
     "OverconstrainedError.prototype.constraint",
-    "OverconstrainedError.prototype.message",
-    "OverconstrainedError.prototype.name",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -5902,6 +5898,7 @@
     "URLSearchParams.prototype.has",
     "URLSearchParams.prototype.keys",
     "URLSearchParams.prototype.set",
+    "URLSearchParams.prototype.size",
     "URLSearchParams.prototype.sort",
     "URLSearchParams.prototype.toString",
     "URLSearchParams.prototype.values",
```

  
#### 112.0.5615.20 (`2023-3-8`) 
No browser API changes.

  
#### 112.0.5615.12 (`2023-3-2`) 
No browser API changes.

  
#### 112.0.5596.2 (`2023-2-17`) ⚡
Added 0 APIs, removed 60 (see: [diff](./browser_apis/chrome-unstable_112.0.5582.0_to_112.0.5596.2.diff), [json](./browser_apis/chrome-unstable_112.0.5582.0_to_112.0.5596.2.json), [full list](./browser_apis/chrome-unstable_112.0.5596.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_112.0.5582.0.json	2023-02-18 01:07:05.953468938 +0000
+++ ./browser_apis/chrome-unstable_112.0.5596.2.json	2023-02-18 01:07:35.941350090 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7780,
+  "browserApiCount": 7720,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -414,20 +414,6 @@
     "ByteLengthQueuingStrategy.prototype.size",
     "CDATASection",
     "CDATASection.prototype",
-    "CSPViolationReportBody",
-    "CSPViolationReportBody.prototype",
-    "CSPViolationReportBody.prototype.blockedURL",
-    "CSPViolationReportBody.prototype.columnNumber",
-    "CSPViolationReportBody.prototype.disposition",
-    "CSPViolationReportBody.prototype.documentURL",
-    "CSPViolationReportBody.prototype.effectiveDirective",
-    "CSPViolationReportBody.prototype.lineNumber",
-    "CSPViolationReportBody.prototype.originalPolicy",
-    "CSPViolationReportBody.prototype.referrer",
-    "CSPViolationReportBody.prototype.sample",
-    "CSPViolationReportBody.prototype.sourceFile",
-    "CSPViolationReportBody.prototype.statusCode",
-    "CSPViolationReportBody.prototype.toJSON",
     "CSS",
     "CSS.Hz",
     "CSS.Q",
@@ -877,17 +863,6 @@
     "CookieStoreManager.prototype.getSubscriptions",
     "CookieStoreManager.prototype.subscribe",
     "CookieStoreManager.prototype.unsubscribe",
-    "CoopAccessViolationReportBody",
-    "CoopAccessViolationReportBody.prototype",
-    "CoopAccessViolationReportBody.prototype.columnNumber",
-    "CoopAccessViolationReportBody.prototype.lineNumber",
-    "CoopAccessViolationReportBody.prototype.openeeURL",
-    "CoopAccessViolationReportBody.prototype.openerURL",
-    "CoopAccessViolationReportBody.prototype.otherDocumentURL",
-    "CoopAccessViolationReportBody.prototype.property",
-    "CoopAccessViolationReportBody.prototype.sourceFile",
-    "CoopAccessViolationReportBody.prototype.toJSON",
-    "CoopAccessViolationReportBody.prototype.type",
     "CountQueuingStrategy",
     "CountQueuingStrategy.prototype",
     "CountQueuingStrategy.prototype.highWaterMark",
@@ -1130,15 +1105,6 @@
     "DelegatedInkTrailPresenter.prototype.expectedImprovement",
     "DelegatedInkTrailPresenter.prototype.presentationArea",
     "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
-    "DeprecationReportBody",
-    "DeprecationReportBody.prototype",
-    "DeprecationReportBody.prototype.anticipatedRemoval",
-    "DeprecationReportBody.prototype.columnNumber",
-    "DeprecationReportBody.prototype.id",
-    "DeprecationReportBody.prototype.lineNumber",
-    "DeprecationReportBody.prototype.message",
-    "DeprecationReportBody.prototype.sourceFile",
-    "DeprecationReportBody.prototype.toJSON",
     "DeviceMotionEvent",
     "DeviceMotionEvent.prototype",
     "DeviceMotionEvent.prototype.acceleration",
@@ -1161,15 +1127,6 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
-    "DocumentPolicyViolationReportBody",
-    "DocumentPolicyViolationReportBody.prototype",
-    "DocumentPolicyViolationReportBody.prototype.columnNumber",
-    "DocumentPolicyViolationReportBody.prototype.disposition",
-    "DocumentPolicyViolationReportBody.prototype.featureId",
-    "DocumentPolicyViolationReportBody.prototype.lineNumber",
-    "DocumentPolicyViolationReportBody.prototype.message",
-    "DocumentPolicyViolationReportBody.prototype.sourceFile",
-    "DocumentPolicyViolationReportBody.prototype.toJSON",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -2529,14 +2486,6 @@
     "IntersectionObserverEntry.prototype.rootBounds",
     "IntersectionObserverEntry.prototype.target",
     "IntersectionObserverEntry.prototype.time",
-    "InterventionReportBody",
-    "InterventionReportBody.prototype",
-    "InterventionReportBody.prototype.columnNumber",
-    "InterventionReportBody.prototype.id",
-    "InterventionReportBody.prototype.lineNumber",
-    "InterventionReportBody.prototype.message",
-    "InterventionReportBody.prototype.sourceFile",
-    "InterventionReportBody.prototype.toJSON",
     "Intl",
     "Intl.Collator",
     "Intl.Collator.prototype",
@@ -4502,15 +4451,6 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
-    "Report",
-    "Report.prototype",
-    "Report.prototype.body",
-    "Report.prototype.toJSON",
-    "Report.prototype.type",
-    "Report.prototype.url",
-    "ReportBody",
-    "ReportBody.prototype",
-    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
```

  
#### 112.0.5582.0 (`2023-2-10`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_111.0.5563.19_to_112.0.5582.0.diff), [json](./browser_apis/chrome-unstable_111.0.5563.19_to_112.0.5582.0.json), [full list](./browser_apis/chrome-unstable_112.0.5582.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_111.0.5563.19.json	2023-02-11 01:02:32.057981667 +0000
+++ ./browser_apis/chrome-unstable_112.0.5582.0.json	2023-02-11 01:03:01.609998655 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7776,
+  "browserApiCount": 7780,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -640,6 +640,9 @@
     "CSSStyleDeclaration.prototype.setProperty",
     "CSSStyleRule",
     "CSSStyleRule.prototype",
+    "CSSStyleRule.prototype.cssRules",
+    "CSSStyleRule.prototype.deleteRule",
+    "CSSStyleRule.prototype.insertRule",
     "CSSStyleRule.prototype.selectorText",
     "CSSStyleRule.prototype.style",
     "CSSStyleRule.prototype.styleMap",
@@ -4486,6 +4489,7 @@
     "RegExp.prototype.test",
     "RegExp.prototype.toString",
     "RegExp.prototype.unicode",
+    "RegExp.prototype.unicodeSets",
     "RegExp.rightContext",
     "RelativeOrientationSensor",
     "RelativeOrientationSensor.prototype",
```

  
#### 111.0.5563.19 (`2023-2-8`) 
No browser API changes.

  
#### 111.0.5563.8 (`2023-2-2`) 
No browser API changes.

  
#### 111.0.5562.0 (`2023-1-27`) ⚡
Added 12 APIs, removed 9 (see: [diff](./browser_apis/chrome-unstable_111.0.5545.6_to_111.0.5562.0.diff), [json](./browser_apis/chrome-unstable_111.0.5545.6_to_111.0.5562.0.json), [full list](./browser_apis/chrome-unstable_111.0.5562.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_111.0.5545.6.json	2023-01-28 01:06:33.649085568 +0000
+++ ./browser_apis/chrome-unstable_111.0.5562.0.json	2023-01-28 01:07:42.501113061 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7773,
+  "browserApiCount": 7776,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -494,6 +494,8 @@
     "CSSAnimation.prototype.animationName",
     "CSSContainerRule",
     "CSSContainerRule.prototype",
+    "CSSContainerRule.prototype.containerName",
+    "CSSContainerRule.prototype.containerQuery",
     "CSSCounterStyleRule",
     "CSSCounterStyleRule.prototype",
     "CSSCounterStyleRule.prototype.additiveSymbols",
@@ -2146,6 +2148,7 @@
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
     "HTMLTemplateElement.prototype.shadowRoot",
+    "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
     "HTMLTextAreaElement.prototype.autocomplete",
@@ -3859,18 +3862,9 @@
     "PaymentAddress.prototype.region",
     "PaymentAddress.prototype.sortingCode",
     "PaymentAddress.prototype.toJSON",
-    "PaymentInstruments",
-    "PaymentInstruments.prototype",
-    "PaymentInstruments.prototype.clear",
-    "PaymentInstruments.prototype.delete",
-    "PaymentInstruments.prototype.get",
-    "PaymentInstruments.prototype.has",
-    "PaymentInstruments.prototype.keys",
-    "PaymentInstruments.prototype.set",
     "PaymentManager",
     "PaymentManager.prototype",
     "PaymentManager.prototype.enableDelegations",
-    "PaymentManager.prototype.instruments",
     "PaymentManager.prototype.userHint",
     "PaymentMethodChangeEvent",
     "PaymentMethodChangeEvent.prototype",
@@ -5641,6 +5635,7 @@
     "String.prototype.fontsize",
     "String.prototype.includes",
     "String.prototype.indexOf",
+    "String.prototype.isWellFormed",
     "String.prototype.italics",
     "String.prototype.lastIndexOf",
     "String.prototype.link",
@@ -5668,6 +5663,7 @@
     "String.prototype.toLowerCase",
     "String.prototype.toString",
     "String.prototype.toUpperCase",
+    "String.prototype.toWellFormed",
     "String.prototype.trim",
     "String.prototype.trimEnd",
     "String.prototype.trimStart",
@@ -6187,6 +6183,12 @@
     "VideoPlaybackQuality.prototype.creationTime",
     "VideoPlaybackQuality.prototype.droppedVideoFrames",
     "VideoPlaybackQuality.prototype.totalVideoFrames",
+    "ViewTransition",
+    "ViewTransition.prototype",
+    "ViewTransition.prototype.finished",
+    "ViewTransition.prototype.ready",
+    "ViewTransition.prototype.skipTransition",
+    "ViewTransition.prototype.updateCallbackDone",
     "VirtualKeyboard",
     "VirtualKeyboard.prototype",
     "VirtualKeyboard.prototype.boundingRect",
@@ -7115,6 +7117,7 @@
     "XMLDocument.prototype.rootElement",
     "XMLDocument.prototype.scripts",
     "XMLDocument.prototype.scrollingElement",
+    "XMLDocument.prototype.startViewTransition",
     "XMLDocument.prototype.styleSheets",
     "XMLDocument.prototype.timeline",
     "XMLDocument.prototype.title",
```

  
#### 111.0.5545.6 (`2023-1-20`) 
No browser API changes.

  
#### 111.0.5532.2 (`2023-1-12`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_110.0.5481.30_to_111.0.5532.2.diff), [json](./browser_apis/chrome-unstable_110.0.5481.30_to_111.0.5532.2.json), [full list](./browser_apis/chrome-unstable_111.0.5532.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_110.0.5481.30.json	2023-01-13 01:06:59.416081258 +0000
+++ ./browser_apis/chrome-unstable_111.0.5532.2.json	2023-01-13 01:07:34.936570431 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7769,
+  "browserApiCount": 7773,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -117,6 +117,9 @@
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
     "ArrayBuffer.prototype.byteLength",
+    "ArrayBuffer.prototype.maxByteLength",
+    "ArrayBuffer.prototype.resizable",
+    "ArrayBuffer.prototype.resize",
     "ArrayBuffer.prototype.slice",
     "Atomics",
     "Atomics.add",
@@ -7299,6 +7302,7 @@
     "XRSession.prototype.depthDataFormat",
     "XRSession.prototype.depthUsage",
     "XRSession.prototype.domOverlayState",
+    "XRSession.prototype.enabledFeatures",
     "XRSession.prototype.end",
     "XRSession.prototype.environmentBlendMode",
     "XRSession.prototype.inputSources",
```

  
#### 110.0.5481.30 (`2023-1-11`) 
No browser API changes.

  
#### 110.0.5481.24 (`2023-1-5`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_110.0.5478.4_to_110.0.5481.24.diff), [json](./browser_apis/chrome-unstable_110.0.5478.4_to_110.0.5481.24.json), [full list](./browser_apis/chrome-unstable_110.0.5481.24.json))
 ```diff
--- ./browser_apis/chrome-unstable_110.0.5478.4.json	2023-01-06 17:09:06.276548126 +0000
+++ ./browser_apis/chrome-unstable_110.0.5481.24.json	2023-01-06 17:09:06.280548131 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "110.0.0.0",
-  "browserApiCount": 7768,
+  "browserApiCount": 7769,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1348,6 +1348,7 @@
     "FileSystemDirectoryHandle.prototype.kind",
     "FileSystemDirectoryHandle.prototype.name",
     "FileSystemDirectoryHandle.prototype.queryPermission",
+    "FileSystemDirectoryHandle.prototype.remove",
     "FileSystemDirectoryHandle.prototype.removeEntry",
     "FileSystemDirectoryHandle.prototype.requestPermission",
     "FileSystemDirectoryHandle.prototype.resolve",
```

  
#### 110.0.5478.4 (`2022-12-16`) ⚡
Added 27 APIs, removed 19 (see: [diff](./browser_apis/chrome-unstable_110.0.5464.2_to_110.0.5478.4.diff), [json](./browser_apis/chrome-unstable_110.0.5464.2_to_110.0.5478.4.json), [full list](./browser_apis/chrome-unstable_110.0.5478.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_110.0.5464.2.json	2023-01-06 17:09:06.276548126 +0000
+++ ./browser_apis/chrome-unstable_110.0.5478.4.json	2023-01-06 17:09:06.276548126 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "110.0.0.0",
-  "browserApiCount": 7760,
+  "browserApiCount": 7768,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -215,8 +215,11 @@
     "AudioContext.prototype.createMediaStreamDestination",
     "AudioContext.prototype.createMediaStreamSource",
     "AudioContext.prototype.getOutputTimestamp",
+    "AudioContext.prototype.onsinkchange",
     "AudioContext.prototype.outputLatency",
     "AudioContext.prototype.resume",
+    "AudioContext.prototype.setSinkId",
+    "AudioContext.prototype.sinkId",
     "AudioContext.prototype.suspend",
     "AudioData",
     "AudioData.prototype",
@@ -296,6 +299,9 @@
     "AudioProcessingEvent.prototype.inputBuffer",
     "AudioProcessingEvent.prototype.outputBuffer",
     "AudioProcessingEvent.prototype.playbackTime",
+    "AudioSinkInfo",
+    "AudioSinkInfo.prototype",
+    "AudioSinkInfo.prototype.type",
     "AudioWorklet",
     "AudioWorklet.prototype",
     "AudioWorklet.prototype.addModule",
@@ -719,27 +725,8 @@
     "CacheStorage.prototype.open",
     "CanvasCaptureMediaStreamTrack",
     "CanvasCaptureMediaStreamTrack.prototype",
-    "CanvasCaptureMediaStreamTrack.prototype.applyConstraints",
     "CanvasCaptureMediaStreamTrack.prototype.canvas",
-    "CanvasCaptureMediaStreamTrack.prototype.clone",
-    "CanvasCaptureMediaStreamTrack.prototype.constructor",
-    "CanvasCaptureMediaStreamTrack.prototype.contentHint",
-    "CanvasCaptureMediaStreamTrack.prototype.enabled",
-    "CanvasCaptureMediaStreamTrack.prototype.getCapabilities",
-    "CanvasCaptureMediaStreamTrack.prototype.getCaptureHandle",
-    "CanvasCaptureMediaStreamTrack.prototype.getConstraints",
-    "CanvasCaptureMediaStreamTrack.prototype.getSettings",
-    "CanvasCaptureMediaStreamTrack.prototype.id",
-    "CanvasCaptureMediaStreamTrack.prototype.kind",
-    "CanvasCaptureMediaStreamTrack.prototype.label",
-    "CanvasCaptureMediaStreamTrack.prototype.muted",
-    "CanvasCaptureMediaStreamTrack.prototype.oncapturehandlechange",
-    "CanvasCaptureMediaStreamTrack.prototype.onended",
-    "CanvasCaptureMediaStreamTrack.prototype.onmute",
-    "CanvasCaptureMediaStreamTrack.prototype.onunmute",
-    "CanvasCaptureMediaStreamTrack.prototype.readyState",
     "CanvasCaptureMediaStreamTrack.prototype.requestFrame",
-    "CanvasCaptureMediaStreamTrack.prototype.stop",
     "CanvasFilter",
     "CanvasFilter.prototype",
     "CanvasGradient",
@@ -1773,6 +1760,7 @@
     "HTMLIFrameElement.prototype.allowPaymentRequest",
     "HTMLIFrameElement.prototype.contentDocument",
     "HTMLIFrameElement.prototype.contentWindow",
+    "HTMLIFrameElement.prototype.credentialless",
     "HTMLIFrameElement.prototype.csp",
     "HTMLIFrameElement.prototype.featurePolicy",
     "HTMLIFrameElement.prototype.frameBorder",
@@ -3052,6 +3040,25 @@
     "MediaStreamTrackEvent.prototype.track",
     "MediaStreamTrackGenerator",
     "MediaStreamTrackGenerator.prototype",
+    "MediaStreamTrackGenerator.prototype.applyConstraints",
+    "MediaStreamTrackGenerator.prototype.clone",
+    "MediaStreamTrackGenerator.prototype.constructor",
+    "MediaStreamTrackGenerator.prototype.contentHint",
+    "MediaStreamTrackGenerator.prototype.enabled",
+    "MediaStreamTrackGenerator.prototype.getCapabilities",
+    "MediaStreamTrackGenerator.prototype.getCaptureHandle",
+    "MediaStreamTrackGenerator.prototype.getConstraints",
+    "MediaStreamTrackGenerator.prototype.getSettings",
+    "MediaStreamTrackGenerator.prototype.id",
+    "MediaStreamTrackGenerator.prototype.kind",
+    "MediaStreamTrackGenerator.prototype.label",
+    "MediaStreamTrackGenerator.prototype.muted",
+    "MediaStreamTrackGenerator.prototype.oncapturehandlechange",
+    "MediaStreamTrackGenerator.prototype.onended",
+    "MediaStreamTrackGenerator.prototype.onmute",
+    "MediaStreamTrackGenerator.prototype.onunmute",
+    "MediaStreamTrackGenerator.prototype.readyState",
+    "MediaStreamTrackGenerator.prototype.stop",
     "MediaStreamTrackGenerator.prototype.writable",
     "MediaStreamTrackProcessor",
     "MediaStreamTrackProcessor.prototype",
@@ -7429,6 +7436,7 @@
     "console.warn",
     "cookieStore",
     "createImageBitmap",
+    "credentialless",
     "crossOriginIsolated",
     "crypto",
     "customElements",
```

  
#### 110.0.5464.2 (`2022-12-9`) 
No browser API changes.

  
#### 110.0.5449.0 (`2022-12-1`) ⚡
Added 68 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_109.0.5414.25_to_110.0.5449.0.diff), [json](./browser_apis/chrome-unstable_109.0.5414.25_to_110.0.5449.0.json), [full list](./browser_apis/chrome-unstable_110.0.5449.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_109.0.5414.25.json	2023-01-06 17:09:06.276548126 +0000
+++ ./browser_apis/chrome-unstable_110.0.5449.0.json	2023-01-06 17:09:06.276548126 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "109.0.0.0",
-  "browserApiCount": 7693,
+  "version": "110.0.0.0",
+  "browserApiCount": 7760,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -107,9 +107,13 @@
     "Array.prototype.sort",
     "Array.prototype.splice",
     "Array.prototype.toLocaleString",
+    "Array.prototype.toReversed",
+    "Array.prototype.toSorted",
+    "Array.prototype.toSpliced",
     "Array.prototype.toString",
     "Array.prototype.unshift",
     "Array.prototype.values",
+    "Array.prototype.with",
     "ArrayBuffer",
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
@@ -402,6 +406,20 @@
     "ByteLengthQueuingStrategy.prototype.size",
     "CDATASection",
     "CDATASection.prototype",
+    "CSPViolationReportBody",
+    "CSPViolationReportBody.prototype",
+    "CSPViolationReportBody.prototype.blockedURL",
+    "CSPViolationReportBody.prototype.columnNumber",
+    "CSPViolationReportBody.prototype.disposition",
+    "CSPViolationReportBody.prototype.documentURL",
+    "CSPViolationReportBody.prototype.effectiveDirective",
+    "CSPViolationReportBody.prototype.lineNumber",
+    "CSPViolationReportBody.prototype.originalPolicy",
+    "CSPViolationReportBody.prototype.referrer",
+    "CSPViolationReportBody.prototype.sample",
+    "CSPViolationReportBody.prototype.sourceFile",
+    "CSPViolationReportBody.prototype.statusCode",
+    "CSPViolationReportBody.prototype.toJSON",
     "CSS",
     "CSS.Hz",
     "CSS.Q",
@@ -865,6 +883,17 @@
     "CookieStoreManager.prototype.getSubscriptions",
     "CookieStoreManager.prototype.subscribe",
     "CookieStoreManager.prototype.unsubscribe",
+    "CoopAccessViolationReportBody",
+    "CoopAccessViolationReportBody.prototype",
+    "CoopAccessViolationReportBody.prototype.columnNumber",
+    "CoopAccessViolationReportBody.prototype.lineNumber",
+    "CoopAccessViolationReportBody.prototype.openeeURL",
+    "CoopAccessViolationReportBody.prototype.openerURL",
+    "CoopAccessViolationReportBody.prototype.otherDocumentURL",
+    "CoopAccessViolationReportBody.prototype.property",
+    "CoopAccessViolationReportBody.prototype.sourceFile",
+    "CoopAccessViolationReportBody.prototype.toJSON",
+    "CoopAccessViolationReportBody.prototype.type",
     "CountQueuingStrategy",
     "CountQueuingStrategy.prototype",
     "CountQueuingStrategy.prototype.highWaterMark",
@@ -1107,6 +1136,15 @@
     "DelegatedInkTrailPresenter.prototype.expectedImprovement",
     "DelegatedInkTrailPresenter.prototype.presentationArea",
     "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
+    "DeprecationReportBody",
+    "DeprecationReportBody.prototype",
+    "DeprecationReportBody.prototype.anticipatedRemoval",
+    "DeprecationReportBody.prototype.columnNumber",
+    "DeprecationReportBody.prototype.id",
+    "DeprecationReportBody.prototype.lineNumber",
+    "DeprecationReportBody.prototype.message",
+    "DeprecationReportBody.prototype.sourceFile",
+    "DeprecationReportBody.prototype.toJSON",
     "DeviceMotionEvent",
     "DeviceMotionEvent.prototype",
     "DeviceMotionEvent.prototype.acceleration",
@@ -1129,6 +1167,15 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
+    "DocumentPolicyViolationReportBody",
+    "DocumentPolicyViolationReportBody.prototype",
+    "DocumentPolicyViolationReportBody.prototype.columnNumber",
+    "DocumentPolicyViolationReportBody.prototype.disposition",
+    "DocumentPolicyViolationReportBody.prototype.featureId",
+    "DocumentPolicyViolationReportBody.prototype.lineNumber",
+    "DocumentPolicyViolationReportBody.prototype.message",
+    "DocumentPolicyViolationReportBody.prototype.sourceFile",
+    "DocumentPolicyViolationReportBody.prototype.toJSON",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -2485,6 +2532,14 @@
     "IntersectionObserverEntry.prototype.rootBounds",
     "IntersectionObserverEntry.prototype.target",
     "IntersectionObserverEntry.prototype.time",
+    "InterventionReportBody",
+    "InterventionReportBody.prototype",
+    "InterventionReportBody.prototype.columnNumber",
+    "InterventionReportBody.prototype.id",
+    "InterventionReportBody.prototype.lineNumber",
+    "InterventionReportBody.prototype.message",
+    "InterventionReportBody.prototype.sourceFile",
+    "InterventionReportBody.prototype.toJSON",
     "Intl",
     "Intl.Collator",
     "Intl.Collator.prototype",
@@ -2623,6 +2678,7 @@
     "LaunchParams",
     "LaunchParams.prototype",
     "LaunchParams.prototype.files",
+    "LaunchParams.prototype.targetURL",
     "LaunchQueue",
     "LaunchQueue.prototype",
     "LaunchQueue.prototype.setConsumer",
@@ -4438,6 +4494,15 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
+    "Report",
+    "Report.prototype",
+    "Report.prototype.body",
+    "Report.prototype.toJSON",
+    "Report.prototype.type",
+    "Report.prototype.url",
+    "ReportBody",
+    "ReportBody.prototype",
+    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
@@ -6020,7 +6085,10 @@
     "Uint8Array.prototype.sort",
     "Uint8Array.prototype.subarray",
     "Uint8Array.prototype.toLocaleString",
+    "Uint8Array.prototype.toReversed",
+    "Uint8Array.prototype.toSorted",
     "Uint8Array.prototype.values",
+    "Uint8Array.prototype.with",
     "Uint8ClampedArray",
     "Uint8ClampedArray.prototype",
     "UserActivation",
@@ -7676,7 +7744,6 @@
     "webkitSpeechRecognitionEvent.prototype",
     "webkitSpeechRecognitionEvent.prototype.resultIndex",
     "webkitSpeechRecognitionEvent.prototype.results",
-    "webkitStorageInfo",
     "webkitURL",
     "webkitURL.createObjectURL",
     "webkitURL.prototype",
```

  
#### 109.0.5414.25 (`2022-11-30`) 
No browser API changes.

  
#### 109.0.5414.10 (`2022-11-17`) ⚡
Added 8 APIs, removed 8 (see: [diff](./browser_apis/chrome-unstable_109.0.5410.0_to_109.0.5414.10.diff), [json](./browser_apis/chrome-unstable_109.0.5410.0_to_109.0.5414.10.json), [full list](./browser_apis/chrome-unstable_109.0.5414.10.json))
 ```diff
--- ./browser_apis/chrome-unstable_109.0.5410.0.json	2023-01-06 17:09:06.276548126 +0000
+++ ./browser_apis/chrome-unstable_109.0.5414.10.json	2023-01-06 17:09:06.276548126 +0000
@@ -842,9 +842,9 @@
     "ConstantSourceNode",
     "ConstantSourceNode.prototype",
     "ConstantSourceNode.prototype.offset",
-    "ContentVisibilityAutoStateChangedEvent",
-    "ContentVisibilityAutoStateChangedEvent.prototype",
-    "ContentVisibilityAutoStateChangedEvent.prototype.skipped",
+    "ContentVisibilityAutoStateChangeEvent",
+    "ContentVisibilityAutoStateChangeEvent.prototype",
+    "ContentVisibilityAutoStateChangeEvent.prototype.skipped",
     "ConvolverNode",
     "ConvolverNode.prototype",
     "ConvolverNode.prototype.buffer",
@@ -2769,7 +2769,7 @@
     "MathMLElement.prototype.onchange",
     "MathMLElement.prototype.onclick",
     "MathMLElement.prototype.onclose",
-    "MathMLElement.prototype.oncontentvisibilityautostatechanged",
+    "MathMLElement.prototype.oncontentvisibilityautostatechange",
     "MathMLElement.prototype.oncontextlost",
     "MathMLElement.prototype.oncontextmenu",
     "MathMLElement.prototype.oncontextrestored",
@@ -3586,7 +3586,7 @@
     "Option.prototype.constructor.prototype.onchange",
     "Option.prototype.constructor.prototype.onclick",
     "Option.prototype.constructor.prototype.onclose",
-    "Option.prototype.constructor.prototype.oncontentvisibilityautostatechanged",
+    "Option.prototype.constructor.prototype.oncontentvisibilityautostatechange",
     "Option.prototype.constructor.prototype.oncontextlost",
     "Option.prototype.constructor.prototype.oncontextmenu",
     "Option.prototype.constructor.prototype.oncontextrestored",
@@ -5187,7 +5187,7 @@
     "SVGViewElement.prototype.onchange",
     "SVGViewElement.prototype.onclick",
     "SVGViewElement.prototype.onclose",
-    "SVGViewElement.prototype.oncontentvisibilityautostatechanged",
+    "SVGViewElement.prototype.oncontentvisibilityautostatechange",
     "SVGViewElement.prototype.oncontextlost",
     "SVGViewElement.prototype.oncontextmenu",
     "SVGViewElement.prototype.oncontextrestored",
@@ -6923,7 +6923,7 @@
     "XMLDocument.prototype.onchange",
     "XMLDocument.prototype.onclick",
     "XMLDocument.prototype.onclose",
-    "XMLDocument.prototype.oncontentvisibilityautostatechanged",
+    "XMLDocument.prototype.oncontentvisibilityautostatechange",
     "XMLDocument.prototype.oncontextlost",
     "XMLDocument.prototype.oncontextmenu",
     "XMLDocument.prototype.oncontextrestored",
@@ -7422,7 +7422,7 @@
     "onchange",
     "onclick",
     "onclose",
-    "oncontentvisibilityautostatechanged",
+    "oncontentvisibilityautostatechange",
     "oncontextlost",
     "oncontextmenu",
     "oncontextrestored",
```

  
#### 109.0.5410.0 (`2022-11-10`) ⚡
Added 109 APIs, removed 2 (see: [diff](./browser_apis/chrome-unstable_109.0.5396.2_to_109.0.5410.0.diff), [json](./browser_apis/chrome-unstable_109.0.5396.2_to_109.0.5410.0.json), [full list](./browser_apis/chrome-unstable_109.0.5410.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_109.0.5396.2.json	2023-01-06 17:09:06.276548126 +0000
+++ ./browser_apis/chrome-unstable_109.0.5410.0.json	2023-01-06 17:09:06.276548126 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "109.0.0.0",
-  "browserApiCount": 7586,
+  "browserApiCount": 7693,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -90,8 +90,6 @@
     "Array.prototype.flat",
     "Array.prototype.flatMap",
     "Array.prototype.forEach",
-    "Array.prototype.group",
-    "Array.prototype.groupToMap",
     "Array.prototype.includes",
     "Array.prototype.indexOf",
     "Array.prototype.join",
@@ -806,6 +804,9 @@
     "CanvasRenderingContext2D.prototype.transform",
     "CanvasRenderingContext2D.prototype.translate",
     "CanvasRenderingContext2D.prototype.wordSpacing",
+    "CaptureController",
+    "CaptureController.prototype",
+    "CaptureController.prototype.setFocusBehavior",
     "ChannelMergerNode",
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
@@ -2745,6 +2746,112 @@
     "Math.tan",
     "Math.tanh",
     "Math.trunc",
+    "MathMLElement",
+    "MathMLElement.prototype",
+    "MathMLElement.prototype.attributeStyleMap",
+    "MathMLElement.prototype.autofocus",
+    "MathMLElement.prototype.blur",
+    "MathMLElement.prototype.dataset",
+    "MathMLElement.prototype.focus",
+    "MathMLElement.prototype.nonce",
+    "MathMLElement.prototype.onabort",
+    "MathMLElement.prototype.onanimationend",
+    "MathMLElement.prototype.onanimationiteration",
+    "MathMLElement.prototype.onanimationstart",
+    "MathMLElement.prototype.onauxclick",
+    "MathMLElement.prototype.onbeforeinput",
+    "MathMLElement.prototype.onbeforematch",
+    "MathMLElement.prototype.onbeforexrselect",
+    "MathMLElement.prototype.onblur",
+    "MathMLElement.prototype.oncancel",
+    "MathMLElement.prototype.oncanplay",
+    "MathMLElement.prototype.oncanplaythrough",
+    "MathMLElement.prototype.onchange",
+    "MathMLElement.prototype.onclick",
+    "MathMLElement.prototype.onclose",
+    "MathMLElement.prototype.oncontentvisibilityautostatechanged",
+    "MathMLElement.prototype.oncontextlost",
+    "MathMLElement.prototype.oncontextmenu",
+    "MathMLElement.prototype.oncontextrestored",
+    "MathMLElement.prototype.oncopy",
+    "MathMLElement.prototype.oncuechange",
+    "MathMLElement.prototype.oncut",
+    "MathMLElement.prototype.ondblclick",
+    "MathMLElement.prototype.ondrag",
+    "MathMLElement.prototype.ondragend",
+    "MathMLElement.prototype.ondragenter",
+    "MathMLElement.prototype.ondragleave",
+    "MathMLElement.prototype.ondragover",
+    "MathMLElement.prototype.ondragstart",
+    "MathMLElement.prototype.ondrop",
+    "MathMLElement.prototype.ondurationchange",
+    "MathMLElement.prototype.onemptied",
+    "MathMLElement.prototype.onended",
+    "MathMLElement.prototype.onerror",
+    "MathMLElement.prototype.onfocus",
+    "MathMLElement.prototype.onformdata",
+    "MathMLElement.prototype.ongotpointercapture",
+    "MathMLElement.prototype.oninput",
+    "MathMLElement.prototype.oninvalid",
+    "MathMLElement.prototype.onkeydown",
+    "MathMLElement.prototype.onkeypress",
+    "MathMLElement.prototype.onkeyup",
+    "MathMLElement.prototype.onload",
+    "MathMLElement.prototype.onloadeddata",
+    "MathMLElement.prototype.onloadedmetadata",
+    "MathMLElement.prototype.onloadstart",
+    "MathMLElement.prototype.onlostpointercapture",
+    "MathMLElement.prototype.onmousedown",
+    "MathMLElement.prototype.onmouseenter",
+    "MathMLElement.prototype.onmouseleave",
+    "MathMLElement.prototype.onmousemove",
+    "MathMLElement.prototype.onmouseout",
+    "MathMLElement.prototype.onmouseover",
+    "MathMLElement.prototype.onmouseup",
+    "MathMLElement.prototype.onmousewheel",
+    "MathMLElement.prototype.onpaste",
+    "MathMLElement.prototype.onpause",
+    "MathMLElement.prototype.onplay",
+    "MathMLElement.prototype.onplaying",
+    "MathMLElement.prototype.onpointercancel",
+    "MathMLElement.prototype.onpointerdown",
+    "MathMLElement.prototype.onpointerenter",
+    "MathMLElement.prototype.onpointerleave",
+    "MathMLElement.prototype.onpointermove",
+    "MathMLElement.prototype.onpointerout",
+    "MathMLElement.prototype.onpointerover",
+    "MathMLElement.prototype.onpointerrawupdate",
+    "MathMLElement.prototype.onpointerup",
+    "MathMLElement.prototype.onprogress",
+    "MathMLElement.prototype.onratechange",
+    "MathMLElement.prototype.onreset",
+    "MathMLElement.prototype.onresize",
+    "MathMLElement.prototype.onscroll",
+    "MathMLElement.prototype.onsecuritypolicyviolation",
+    "MathMLElement.prototype.onseeked",
+    "MathMLElement.prototype.onseeking",
+    "MathMLElement.prototype.onselect",
+    "MathMLElement.prototype.onselectionchange",
+    "MathMLElement.prototype.onselectstart",
+    "MathMLElement.prototype.onslotchange",
+    "MathMLElement.prototype.onstalled",
+    "MathMLElement.prototype.onsubmit",
+    "MathMLElement.prototype.onsuspend",
+    "MathMLElement.prototype.ontimeupdate",
+    "MathMLElement.prototype.ontoggle",
+    "MathMLElement.prototype.ontransitioncancel",
+    "MathMLElement.prototype.ontransitionend",
+    "MathMLElement.prototype.ontransitionrun",
+    "MathMLElement.prototype.ontransitionstart",
+    "MathMLElement.prototype.onvolumechange",
+    "MathMLElement.prototype.onwaiting",
+    "MathMLElement.prototype.onwebkitanimationend",
+    "MathMLElement.prototype.onwebkitanimationiteration",
+    "MathMLElement.prototype.onwebkitanimationstart",
+    "MathMLElement.prototype.onwebkittransitionend",
+    "MathMLElement.prototype.onwheel",
+    "MathMLElement.prototype.style",
+    "MathMLElement.prototype.tabIndex",
     "MediaCapabilities",
     "MediaCapabilities.prototype",
     "MediaCapabilities.prototype.decodingInfo",
```

  
#### 109.0.5396.2 (`2022-11-3`) 
No browser API changes.

  
#### 109.0.5384.0 (`2022-10-28`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_108.0.5359.19_to_109.0.5384.0.diff), [json](./browser_apis/chrome-unstable_108.0.5359.19_to_109.0.5384.0.json), [full list](./browser_apis/chrome-unstable_109.0.5384.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_108.0.5359.19.json	2023-01-06 17:09:06.272548121 +0000
+++ ./browser_apis/chrome-unstable_109.0.5384.0.json	2023-01-06 17:09:06.276548126 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "108.0.0.0",
-  "browserApiCount": 7585,
+  "version": "109.0.0.0",
+  "browserApiCount": 7586,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3830,6 +3830,7 @@
     "PerformanceResourceTiming.prototype.requestStart",
     "PerformanceResourceTiming.prototype.responseEnd",
     "PerformanceResourceTiming.prototype.responseStart",
+    "PerformanceResourceTiming.prototype.responseStatus",
     "PerformanceResourceTiming.prototype.secureConnectionStart",
     "PerformanceResourceTiming.prototype.serverTiming",
     "PerformanceResourceTiming.prototype.toJSON",
```

  
#### 108.0.5359.19 (`2022-10-26`) 
No browser API changes.

  
#### 108.0.5359.10 (`2022-10-19`) ⚡
Added 23 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_108.0.5355.0_to_108.0.5359.10.diff), [json](./browser_apis/chrome-unstable_108.0.5355.0_to_108.0.5359.10.json), [full list](./browser_apis/chrome-unstable_108.0.5359.10.json))
 ```diff
--- ./browser_apis/chrome-unstable_108.0.5355.0.json	2023-01-06 17:09:06.272548121 +0000
+++ ./browser_apis/chrome-unstable_108.0.5359.10.json	2023-01-06 17:09:06.272548121 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "108.0.0.0",
-  "browserApiCount": 7562,
+  "browserApiCount": 7585,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -419,6 +419,12 @@
     "CSS.dpcm",
     "CSS.dpi",
     "CSS.dppx",
+    "CSS.dvb",
+    "CSS.dvh",
+    "CSS.dvi",
+    "CSS.dvmax",
+    "CSS.dvmin",
+    "CSS.dvw",
     "CSS.em",
     "CSS.escape",
     "CSS.ex",
@@ -427,6 +433,12 @@
     "CSS.highlights",
     "CSS.in",
     "CSS.kHz",
+    "CSS.lvb",
+    "CSS.lvh",
+    "CSS.lvi",
+    "CSS.lvmax",
+    "CSS.lvmin",
+    "CSS.lvw",
     "CSS.mm",
     "CSS.ms",
     "CSS.number",
@@ -440,8 +452,16 @@
     "CSS.rem",
     "CSS.s",
     "CSS.supports",
+    "CSS.svb",
+    "CSS.svh",
+    "CSS.svi",
+    "CSS.svmax",
+    "CSS.svmin",
+    "CSS.svw",
     "CSS.turn",
+    "CSS.vb",
     "CSS.vh",
+    "CSS.vi",
     "CSS.vmax",
     "CSS.vmin",
     "CSS.vw",
@@ -2327,6 +2347,9 @@
     "IIRFilterNode",
     "IIRFilterNode.prototype",
     "IIRFilterNode.prototype.getFrequencyResponse",
+    "IdentityCredential",
+    "IdentityCredential.prototype",
+    "IdentityCredential.prototype.token",
     "IdleDeadline",
     "IdleDeadline.prototype",
     "IdleDeadline.prototype.didTimeout",
```

  
#### 108.0.5355.0 (`2022-10-13`) 
No browser API changes.

  
#### 108.0.5343.2 (`2022-10-7`) ⚡
Added 13 APIs, removed 2 (see: [diff](./browser_apis/chrome-unstable_108.0.5327.0_to_108.0.5343.2.diff), [json](./browser_apis/chrome-unstable_108.0.5327.0_to_108.0.5343.2.json), [full list](./browser_apis/chrome-unstable_108.0.5343.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_108.0.5327.0.json	2023-01-06 17:09:06.272548121 +0000
+++ ./browser_apis/chrome-unstable_108.0.5343.2.json	2023-01-06 17:09:06.272548121 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "108.0.0.0",
-  "browserApiCount": 7551,
+  "browserApiCount": 7562,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -821,6 +821,9 @@
     "ConstantSourceNode",
     "ConstantSourceNode.prototype",
     "ConstantSourceNode.prototype.offset",
+    "ContentVisibilityAutoStateChangedEvent",
+    "ContentVisibilityAutoStateChangedEvent.prototype",
+    "ContentVisibilityAutoStateChangedEvent.prototype.skipped",
     "ConvolverNode",
     "ConvolverNode.prototype",
     "ConvolverNode.prototype.buffer",
@@ -2832,6 +2835,7 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
+    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2846,6 +2850,8 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
+    "MediaSourceHandle",
+    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
@@ -3450,6 +3456,7 @@
     "Option.prototype.constructor.prototype.onchange",
     "Option.prototype.constructor.prototype.onclick",
     "Option.prototype.constructor.prototype.onclose",
+    "Option.prototype.constructor.prototype.oncontentvisibilityautostatechanged",
     "Option.prototype.constructor.prototype.oncontextlost",
     "Option.prototype.constructor.prototype.oncontextmenu",
     "Option.prototype.constructor.prototype.oncontextrestored",
@@ -3758,6 +3765,7 @@
     "PerformanceNavigation.prototype.type",
     "PerformanceNavigationTiming",
     "PerformanceNavigationTiming.prototype",
+    "PerformanceNavigationTiming.prototype.activationStart",
     "PerformanceNavigationTiming.prototype.domComplete",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventEnd",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventStart",
@@ -5048,6 +5056,7 @@
     "SVGViewElement.prototype.onchange",
     "SVGViewElement.prototype.onclick",
     "SVGViewElement.prototype.onclose",
+    "SVGViewElement.prototype.oncontentvisibilityautostatechanged",
     "SVGViewElement.prototype.oncontextlost",
     "SVGViewElement.prototype.oncontextmenu",
     "SVGViewElement.prototype.oncontextrestored",
@@ -6783,6 +6792,7 @@
     "XMLDocument.prototype.onchange",
     "XMLDocument.prototype.onclick",
     "XMLDocument.prototype.onclose",
+    "XMLDocument.prototype.oncontentvisibilityautostatechanged",
     "XMLDocument.prototype.oncontextlost",
     "XMLDocument.prototype.oncontextmenu",
     "XMLDocument.prototype.oncontextrestored",
@@ -6840,6 +6850,7 @@
     "XMLDocument.prototype.onpointerover",
     "XMLDocument.prototype.onpointerrawupdate",
     "XMLDocument.prototype.onpointerup",
+    "XMLDocument.prototype.onprerenderingchange",
     "XMLDocument.prototype.onprogress",
     "XMLDocument.prototype.onratechange",
     "XMLDocument.prototype.onreadystatechange",
@@ -6880,6 +6891,7 @@
     "XMLDocument.prototype.plugins",
     "XMLDocument.prototype.pointerLockElement",
     "XMLDocument.prototype.prepend",
+    "XMLDocument.prototype.prerendering",
     "XMLDocument.prototype.queryCommandEnabled",
     "XMLDocument.prototype.queryCommandIndeterm",
     "XMLDocument.prototype.queryCommandState",
@@ -7223,8 +7235,6 @@
     "customElements",
     "decodeURI",
     "decodeURIComponent",
-    "defaultStatus",
-    "defaultstatus",
     "devicePixelRatio",
     "document",
     "encodeURI",
@@ -7281,6 +7291,7 @@
     "onchange",
     "onclick",
     "onclose",
+    "oncontentvisibilityautostatechanged",
     "oncontextlost",
     "oncontextmenu",
     "oncontextrestored",
```

  
#### 108.0.5327.0 (`2022-9-29`) ⚡
Added 5 APIs, removed 2 (see: [diff](./browser_apis/chrome-unstable_107.0.5304.18_to_108.0.5327.0.diff), [json](./browser_apis/chrome-unstable_107.0.5304.18_to_108.0.5327.0.json), [full list](./browser_apis/chrome-unstable_108.0.5327.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_107.0.5304.18.json	2023-01-06 17:09:06.272548121 +0000
+++ ./browser_apis/chrome-unstable_108.0.5327.0.json	2023-01-06 17:09:06.272548121 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "107.0.0.0",
-  "browserApiCount": 7548,
+  "version": "108.0.0.0",
+  "browserApiCount": 7551,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -90,6 +90,8 @@
     "Array.prototype.flat",
     "Array.prototype.flatMap",
     "Array.prototype.forEach",
+    "Array.prototype.group",
+    "Array.prototype.groupToMap",
     "Array.prototype.includes",
     "Array.prototype.indexOf",
     "Array.prototype.join",
@@ -1632,6 +1634,8 @@
     "HTMLFormElement.prototype.method",
     "HTMLFormElement.prototype.name",
     "HTMLFormElement.prototype.noValidate",
+    "HTMLFormElement.prototype.rel",
+    "HTMLFormElement.prototype.relList",
     "HTMLFormElement.prototype.reportValidity",
     "HTMLFormElement.prototype.requestSubmit",
     "HTMLFormElement.prototype.reset",
@@ -2931,10 +2935,8 @@
     "NavigateEvent.prototype.info",
     "NavigateEvent.prototype.intercept",
     "NavigateEvent.prototype.navigationType",
-    "NavigateEvent.prototype.restoreScroll",
     "NavigateEvent.prototype.scroll",
     "NavigateEvent.prototype.signal",
-    "NavigateEvent.prototype.transitionWhile",
     "NavigateEvent.prototype.userInitiated",
     "Navigation",
     "Navigation.prototype",
@@ -3961,6 +3963,7 @@
     "Proxy",
     "Proxy.revocable",
     "PublicKeyCredential",
+    "PublicKeyCredential.isConditionalMediationAvailable",
     "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable",
     "PublicKeyCredential.prototype",
     "PublicKeyCredential.prototype.authenticatorAttachment",
```

  <!-- browserapis:end -->
