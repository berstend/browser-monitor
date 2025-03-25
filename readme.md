# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 134.0.6998.165 (`2025-3-21`) 
No browser API changes.

  
#### 134.0.6998.117 (`2025-3-19`) 
No browser API changes.

  
#### 134.0.6998.88 (`2025-3-10`) ⚡
Added 0 APIs, removed 18 (see: [diff](./browser_apis/chrome-stable_134.0.6998.35_to_134.0.6998.88.diff), [json](./browser_apis/chrome-stable_134.0.6998.35_to_134.0.6998.88.json), [full list](./browser_apis/chrome-stable_134.0.6998.88.json))
 ```diff
--- ./browser_apis/chrome-stable_134.0.6998.35.json	2025-03-11 01:15:15.171036857 +0000
+++ ./browser_apis/chrome-stable_134.0.6998.88.json	2025-03-11 01:15:47.363282852 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8628,
+  "browserApiCount": 8610,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -101,14 +101,6 @@
     "ArrayBuffer.prototype.slice",
     "ArrayBuffer.prototype.transfer",
     "ArrayBuffer.prototype.transferToFixedLength",
-    "AsyncDisposableStack",
-    "AsyncDisposableStack.prototype",
-    "AsyncDisposableStack.prototype.adopt",
-    "AsyncDisposableStack.prototype.defer",
-    "AsyncDisposableStack.prototype.disposeAsync",
-    "AsyncDisposableStack.prototype.disposed",
-    "AsyncDisposableStack.prototype.move",
-    "AsyncDisposableStack.prototype.use",
     "Atomics",
     "Atomics.add",
     "Atomics.and",
@@ -1295,14 +1287,6 @@
     "DevicePosture.prototype",
     "DevicePosture.prototype.onchange",
     "DevicePosture.prototype.type",
-    "DisposableStack",
-    "DisposableStack.prototype",
-    "DisposableStack.prototype.adopt",
-    "DisposableStack.prototype.defer",
-    "DisposableStack.prototype.dispose",
-    "DisposableStack.prototype.disposed",
-    "DisposableStack.prototype.move",
-    "DisposableStack.prototype.use",
     "DocumentPictureInPicture",
     "DocumentPictureInPicture.prototype",
     "DocumentPictureInPicture.prototype.onenter",
@@ -6443,8 +6427,6 @@
     "SubtleCrypto.prototype.unwrapKey",
     "SubtleCrypto.prototype.verify",
     "SubtleCrypto.prototype.wrapKey",
-    "SuppressedError",
-    "SuppressedError.prototype",
     "Symbol",
     "Symbol.for",
     "Symbol.keyFor",
```

  
#### 134.0.6998.35 (`2025-3-4`) ⚡
Added 43 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_133.0.6943.141_to_134.0.6998.35.diff), [json](./browser_apis/chrome-stable_133.0.6943.141_to_134.0.6998.35.json), [full list](./browser_apis/chrome-stable_134.0.6998.35.json))
 ```diff
--- ./browser_apis/chrome-stable_133.0.6943.141.json	2025-03-05 01:14:39.071909496 +0000
+++ ./browser_apis/chrome-stable_134.0.6998.35.json	2025-03-05 01:15:10.368066762 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8585,
+  "browserApiCount": 8628,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -101,6 +101,14 @@
     "ArrayBuffer.prototype.slice",
     "ArrayBuffer.prototype.transfer",
     "ArrayBuffer.prototype.transferToFixedLength",
+    "AsyncDisposableStack",
+    "AsyncDisposableStack.prototype",
+    "AsyncDisposableStack.prototype.adopt",
+    "AsyncDisposableStack.prototype.defer",
+    "AsyncDisposableStack.prototype.disposeAsync",
+    "AsyncDisposableStack.prototype.disposed",
+    "AsyncDisposableStack.prototype.move",
+    "AsyncDisposableStack.prototype.use",
     "Atomics",
     "Atomics.add",
     "Atomics.and",
@@ -504,6 +512,15 @@
     "CSSFontFaceRule",
     "CSSFontFaceRule.prototype",
     "CSSFontFaceRule.prototype.style",
+    "CSSFontFeatureValuesRule",
+    "CSSFontFeatureValuesRule.prototype",
+    "CSSFontFeatureValuesRule.prototype.annotation",
+    "CSSFontFeatureValuesRule.prototype.characterVariant",
+    "CSSFontFeatureValuesRule.prototype.fontFamily",
+    "CSSFontFeatureValuesRule.prototype.ornaments",
+    "CSSFontFeatureValuesRule.prototype.styleset",
+    "CSSFontFeatureValuesRule.prototype.stylistic",
+    "CSSFontFeatureValuesRule.prototype.swash",
     "CSSFontPaletteValuesRule",
     "CSSFontPaletteValuesRule.prototype",
     "CSSFontPaletteValuesRule.prototype.basePalette",
@@ -1278,6 +1295,14 @@
     "DevicePosture.prototype",
     "DevicePosture.prototype.onchange",
     "DevicePosture.prototype.type",
+    "DisposableStack",
+    "DisposableStack.prototype",
+    "DisposableStack.prototype.adopt",
+    "DisposableStack.prototype.defer",
+    "DisposableStack.prototype.dispose",
+    "DisposableStack.prototype.disposed",
+    "DisposableStack.prototype.move",
+    "DisposableStack.prototype.use",
     "DocumentPictureInPicture",
     "DocumentPictureInPicture.prototype",
     "DocumentPictureInPicture.prototype.onenter",
@@ -1399,6 +1424,7 @@
     "EncodedVideoChunk.prototype.type",
     "Error",
     "Error.captureStackTrace",
+    "Error.isError",
     "Error.prototype",
     "Error.prototype.toString",
     "ErrorEvent",
@@ -1591,6 +1617,8 @@
     "GPUAdapterInfo.prototype.architecture",
     "GPUAdapterInfo.prototype.description",
     "GPUAdapterInfo.prototype.device",
+    "GPUAdapterInfo.prototype.subgroupMaxSize",
+    "GPUAdapterInfo.prototype.subgroupMinSize",
     "GPUAdapterInfo.prototype.vendor",
     "GPUBindGroup",
     "GPUBindGroup.prototype",
@@ -2069,7 +2097,9 @@
     "HTMLDialogElement",
     "HTMLDialogElement.prototype",
     "HTMLDialogElement.prototype.close",
+    "HTMLDialogElement.prototype.closedBy",
     "HTMLDialogElement.prototype.open",
+    "HTMLDialogElement.prototype.requestClose",
     "HTMLDialogElement.prototype.returnValue",
     "HTMLDialogElement.prototype.show",
     "HTMLDialogElement.prototype.showModal",
@@ -3977,6 +4007,7 @@
     "OffscreenCanvasRenderingContext2D.prototype.fontKerning",
     "OffscreenCanvasRenderingContext2D.prototype.fontStretch",
     "OffscreenCanvasRenderingContext2D.prototype.fontVariantCaps",
+    "OffscreenCanvasRenderingContext2D.prototype.getContextAttributes",
     "OffscreenCanvasRenderingContext2D.prototype.getImageData",
     "OffscreenCanvasRenderingContext2D.prototype.getLineDash",
     "OffscreenCanvasRenderingContext2D.prototype.getTransform",
@@ -6169,6 +6200,7 @@
     "SharedStorage",
     "SharedStorage.prototype",
     "SharedStorage.prototype.append",
+    "SharedStorage.prototype.batchUpdate",
     "SharedStorage.prototype.clear",
     "SharedStorage.prototype.createWorklet",
     "SharedStorage.prototype.delete",
@@ -6177,6 +6209,15 @@
     "SharedStorage.prototype.selectURL",
     "SharedStorage.prototype.set",
     "SharedStorage.prototype.worklet",
+    "SharedStorageAppendMethod",
+    "SharedStorageAppendMethod.prototype",
+    "SharedStorageAppendMethod.prototype.constructor",
+    "SharedStorageClearMethod",
+    "SharedStorageClearMethod.prototype",
+    "SharedStorageDeleteMethod",
+    "SharedStorageDeleteMethod.prototype",
+    "SharedStorageSetMethod",
+    "SharedStorageSetMethod.prototype",
     "SharedStorageWorklet",
     "SharedStorageWorklet.prototype",
     "SharedStorageWorklet.prototype.addModule",
@@ -6402,6 +6443,8 @@
     "SubtleCrypto.prototype.unwrapKey",
     "SubtleCrypto.prototype.verify",
     "SubtleCrypto.prototype.wrapKey",
+    "SuppressedError",
+    "SuppressedError.prototype",
     "Symbol",
     "Symbol.for",
     "Symbol.keyFor",
```

  
#### 133.0.6943.141 (`2025-2-25`) 
No browser API changes.

  
#### 133.0.6943.126 (`2025-2-18`) 
No browser API changes.

  
#### 133.0.6943.98 (`2025-2-12`) 
No browser API changes.

  
#### 133.0.6943.53 (`2025-2-4`) ⚡
Added 36 APIs, removed 7 (see: [diff](./browser_apis/chrome-stable_132.0.6834.159_to_133.0.6943.53.diff), [json](./browser_apis/chrome-stable_132.0.6834.159_to_133.0.6943.53.json), [full list](./browser_apis/chrome-stable_133.0.6943.53.json))
 ```diff
--- ./browser_apis/chrome-stable_132.0.6834.159.json	2025-02-05 01:11:13.881068144 +0000
+++ ./browser_apis/chrome-stable_133.0.6943.53.json	2025-02-05 01:11:34.161258859 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8556,
+  "browserApiCount": 8585,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -110,6 +110,7 @@
     "Atomics.load",
     "Atomics.notify",
     "Atomics.or",
+    "Atomics.pause",
     "Atomics.store",
     "Atomics.sub",
     "Atomics.wait",
@@ -396,6 +397,20 @@
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
@@ -756,6 +771,7 @@
     "CSSTransition.prototype.oncancel",
     "CSSTransition.prototype.onfinish",
     "CSSTransition.prototype.onremove",
+    "CSSTransition.prototype.overallProgress",
     "CSSTransition.prototype.pause",
     "CSSTransition.prototype.pending",
     "CSSTransition.prototype.persist",
@@ -1272,9 +1288,6 @@
     "DocumentPictureInPictureEvent.prototype.window",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
-    "DocumentTimeline.prototype.constructor",
-    "DocumentTimeline.prototype.currentTime",
-    "DocumentTimeline.prototype.duration",
     "DocumentType",
     "DocumentType.prototype",
     "DocumentType.prototype.after",
@@ -1496,6 +1509,10 @@
     "FileSystemFileHandle.prototype.createWritable",
     "FileSystemFileHandle.prototype.getFile",
     "FileSystemFileHandle.prototype.move",
+    "FileSystemObserver",
+    "FileSystemObserver.prototype",
+    "FileSystemObserver.prototype.disconnect",
+    "FileSystemObserver.prototype.observe",
     "FileSystemWritableFileStream",
     "FileSystemWritableFileStream.prototype",
     "FileSystemWritableFileStream.prototype.mode",
@@ -1947,6 +1964,7 @@
     "HTMLAreaElement",
     "HTMLAreaElement.prototype",
     "HTMLAreaElement.prototype.alt",
+    "HTMLAreaElement.prototype.attributionSrc",
     "HTMLAreaElement.prototype.coords",
     "HTMLAreaElement.prototype.download",
     "HTMLAreaElement.prototype.hash",
@@ -2842,6 +2860,7 @@
     "Image.prototype.alt",
     "Image.prototype.attributionSrc",
     "Image.prototype.border",
+    "Image.prototype.browsingTopics",
     "Image.prototype.complete",
     "Image.prototype.constructor",
     "Image.prototype.crossOrigin",
@@ -4151,6 +4170,7 @@
     "Option.prototype.constructor.prototype.lastElementChild",
     "Option.prototype.constructor.prototype.localName",
     "Option.prototype.constructor.prototype.matches",
+    "Option.prototype.constructor.prototype.moveBefore",
     "Option.prototype.constructor.prototype.namespaceURI",
     "Option.prototype.constructor.prototype.nextElementSibling",
     "Option.prototype.constructor.prototype.nonce",
@@ -4536,6 +4556,7 @@
     "PerformanceResourceTiming.prototype.domainLookupStart",
     "PerformanceResourceTiming.prototype.encodedBodySize",
     "PerformanceResourceTiming.prototype.fetchStart",
+    "PerformanceResourceTiming.prototype.finalResponseHeadersStart",
     "PerformanceResourceTiming.prototype.firstInterimResponseStart",
     "PerformanceResourceTiming.prototype.initiatorType",
     "PerformanceResourceTiming.prototype.nextHopProtocol",
@@ -4743,6 +4764,7 @@
     "Proxy",
     "Proxy.revocable",
     "PublicKeyCredential",
+    "PublicKeyCredential.getClientCapabilities",
     "PublicKeyCredential.isConditionalMediationAvailable",
     "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable",
     "PublicKeyCredential.parseCreationOptionsFromJSON",
@@ -5093,6 +5115,9 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
+    "ReportBody",
+    "ReportBody.prototype",
+    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
@@ -5988,10 +6013,6 @@
     "ScriptProcessorNode.prototype",
     "ScriptProcessorNode.prototype.bufferSize",
     "ScriptProcessorNode.prototype.onaudioprocess",
-    "ScrollTimeline",
-    "ScrollTimeline.prototype",
-    "ScrollTimeline.prototype.axis",
-    "ScrollTimeline.prototype.source",
     "SecurityPolicyViolationEvent",
     "SecurityPolicyViolationEvent.prototype",
     "SecurityPolicyViolationEvent.prototype.blockedURI",
@@ -6133,6 +6154,7 @@
     "ShadowRoot.prototype.innerHTML",
     "ShadowRoot.prototype.lastElementChild",
     "ShadowRoot.prototype.mode",
+    "ShadowRoot.prototype.moveBefore",
     "ShadowRoot.prototype.onslotchange",
     "ShadowRoot.prototype.pictureInPictureElement",
     "ShadowRoot.prototype.pointerLockElement",
@@ -6872,7 +6894,13 @@
     "VideoPlaybackQuality.prototype.totalVideoFrames",
     "ViewTimeline",
     "ViewTimeline.prototype",
+    "ViewTimeline.prototype.axis",
+    "ViewTimeline.prototype.constructor",
+    "ViewTimeline.prototype.constructor.prototype",
+    "ViewTimeline.prototype.constructor.prototype.currentTime",
+    "ViewTimeline.prototype.constructor.prototype.duration",
     "ViewTimeline.prototype.endOffset",
+    "ViewTimeline.prototype.source",
     "ViewTimeline.prototype.startOffset",
     "ViewTimeline.prototype.subject",
     "ViewTransition",
@@ -7729,6 +7757,7 @@
     "XMLDocument.prototype.lastModified",
     "XMLDocument.prototype.linkColor",
     "XMLDocument.prototype.links",
+    "XMLDocument.prototype.moveBefore",
     "XMLDocument.prototype.onabort",
     "XMLDocument.prototype.onanimationend",
     "XMLDocument.prototype.onanimationiteration",
```

  
#### 132.0.6834.159 (`2025-1-28`) 
No browser API changes.

  
#### 132.0.6834.110 (`2025-1-22`) 
No browser API changes.

  
#### 132.0.6834.83 (`2025-1-14`) ⚡
Added 20 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_131.0.6778.264_to_132.0.6834.83.diff), [json](./browser_apis/chrome-stable_131.0.6778.264_to_132.0.6834.83.json), [full list](./browser_apis/chrome-stable_132.0.6834.83.json))
 ```diff
--- ./browser_apis/chrome-stable_131.0.6778.264.json	2025-01-15 01:10:17.276958977 +0000
+++ ./browser_apis/chrome-stable_132.0.6834.83.json	2025-01-15 01:10:57.609065180 +0000
@@ -1,7 +1,10 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8536,
+  "browserApiCount": 8556,
   "browserApis": [
+    "AICreateMonitor",
+    "AICreateMonitor.prototype",
+    "AICreateMonitor.prototype.ondownloadprogress",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
@@ -386,6 +389,7 @@
     "BrowserCaptureMediaStreamTrack",
     "BrowserCaptureMediaStreamTrack.prototype",
     "BrowserCaptureMediaStreamTrack.prototype.cropTo",
+    "BrowserCaptureMediaStreamTrack.prototype.restrictTo",
     "ByteLengthQueuingStrategy",
     "ByteLengthQueuingStrategy.prototype",
     "ByteLengthQueuingStrategy.prototype.highWaterMark",
@@ -1254,6 +1258,10 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
+    "DevicePosture",
+    "DevicePosture.prototype",
+    "DevicePosture.prototype.onchange",
+    "DevicePosture.prototype.type",
     "DocumentPictureInPicture",
     "DocumentPictureInPicture.prototype",
     "DocumentPictureInPicture.prototype.onenter",
@@ -1639,6 +1647,7 @@
     "GPUComputePipeline.prototype.label",
     "GPUDevice",
     "GPUDevice.prototype",
+    "GPUDevice.prototype.adapterInfo",
     "GPUDevice.prototype.createBindGroup",
     "GPUDevice.prototype.createBindGroupLayout",
     "GPUDevice.prototype.createBuffer",
@@ -2815,6 +2824,7 @@
     "IdentityProvider.close",
     "IdentityProvider.getUserInfo",
     "IdentityProvider.prototype",
+    "IdentityProvider.resolve",
     "IdleDeadline",
     "IdleDeadline.prototype",
     "IdleDeadline.prototype.didTimeout",
@@ -3683,11 +3693,13 @@
     "Navigator.prototype.deprecatedRunAdAuctionEnforcesKAnonymity",
     "Navigator.prototype.deprecatedURNToURL",
     "Navigator.prototype.deviceMemory",
+    "Navigator.prototype.devicePosture",
     "Navigator.prototype.doNotTrack",
     "Navigator.prototype.geolocation",
     "Navigator.prototype.getBattery",
     "Navigator.prototype.getGamepads",
     "Navigator.prototype.getInstalledRelatedApps",
+    "Navigator.prototype.getInterestGroupAdAuctionData",
     "Navigator.prototype.getUserMedia",
     "Navigator.prototype.gpu",
     "Navigator.prototype.hardwareConcurrency",
@@ -4741,6 +4753,9 @@
     "PublicKeyCredential.prototype.rawId",
     "PublicKeyCredential.prototype.response",
     "PublicKeyCredential.prototype.toJSON",
+    "PublicKeyCredential.signalAllAcceptedCredentials",
+    "PublicKeyCredential.signalCurrentUserDetails",
+    "PublicKeyCredential.signalUnknownCredential",
     "PushManager",
     "PushManager.prototype",
     "PushManager.prototype.getSubscription",
@@ -5089,6 +5104,7 @@
     "Request.prototype.blob",
     "Request.prototype.body",
     "Request.prototype.bodyUsed",
+    "Request.prototype.bytes",
     "Request.prototype.cache",
     "Request.prototype.clone",
     "Request.prototype.credentials",
@@ -5133,6 +5149,7 @@
     "Response.prototype.blob",
     "Response.prototype.body",
     "Response.prototype.bodyUsed",
+    "Response.prototype.bytes",
     "Response.prototype.clone",
     "Response.prototype.formData",
     "Response.prototype.headers",
@@ -5145,6 +5162,9 @@
     "Response.prototype.type",
     "Response.prototype.url",
     "Response.redirect",
+    "RestrictionTarget",
+    "RestrictionTarget.fromElement",
+    "RestrictionTarget.prototype",
     "SVGAElement",
     "SVGAElement.prototype",
     "SVGAElement.prototype.href",
```

  
#### 131.0.6778.264 (`2025-1-7`) 
No browser API changes.

  
#### 131.0.6778.204 (`2024-12-18`) 
No browser API changes.

  
#### 131.0.6778.139 (`2024-12-10`) 
No browser API changes.

  
#### 131.0.6778.108 (`2024-12-3`) 
No browser API changes.

  
#### 131.0.6778.85 (`2024-11-19`) 
No browser API changes.

  
#### 131.0.6778.69 (`2024-11-12`) ⚡
Added 24 APIs, removed 5 (see: [diff](./browser_apis/chrome-stable_130.0.6723.116_to_131.0.6778.69.diff), [json](./browser_apis/chrome-stable_130.0.6723.116_to_131.0.6778.69.json), [full list](./browser_apis/chrome-stable_131.0.6778.69.json))
 ```diff
--- ./browser_apis/chrome-stable_130.0.6723.116.json	2024-11-13 01:11:00.980981093 +0000
+++ ./browser_apis/chrome-stable_131.0.6778.69.json	2024-11-13 01:11:33.945230359 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8517,
+  "browserApiCount": 8536,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -521,6 +521,10 @@
     "CSSLayerStatementRule",
     "CSSLayerStatementRule.prototype",
     "CSSLayerStatementRule.prototype.nameList",
+    "CSSMarginRule",
+    "CSSMarginRule.prototype",
+    "CSSMarginRule.prototype.name",
+    "CSSMarginRule.prototype.style",
     "CSSMathClamp",
     "CSSMathClamp.prototype",
     "CSSMathClamp.prototype.lower",
@@ -581,14 +585,12 @@
     "CSSPositionTryDescriptors.prototype.inline-size",
     "CSSPositionTryDescriptors.prototype.inlineSize",
     "CSSPositionTryDescriptors.prototype.inset",
-    "CSSPositionTryDescriptors.prototype.inset-area",
     "CSSPositionTryDescriptors.prototype.inset-block",
     "CSSPositionTryDescriptors.prototype.inset-block-end",
     "CSSPositionTryDescriptors.prototype.inset-block-start",
     "CSSPositionTryDescriptors.prototype.inset-inline",
     "CSSPositionTryDescriptors.prototype.inset-inline-end",
     "CSSPositionTryDescriptors.prototype.inset-inline-start",
-    "CSSPositionTryDescriptors.prototype.insetArea",
     "CSSPositionTryDescriptors.prototype.insetBlock",
     "CSSPositionTryDescriptors.prototype.insetBlockEnd",
     "CSSPositionTryDescriptors.prototype.insetBlockStart",
@@ -1558,7 +1560,6 @@
     "GPUAdapter.prototype.info",
     "GPUAdapter.prototype.isFallbackAdapter",
     "GPUAdapter.prototype.limits",
-    "GPUAdapter.prototype.requestAdapterInfo",
     "GPUAdapter.prototype.requestDevice",
     "GPUAdapterInfo",
     "GPUAdapterInfo.prototype",
@@ -1587,6 +1588,7 @@
     "GPUCanvasContext.prototype",
     "GPUCanvasContext.prototype.canvas",
     "GPUCanvasContext.prototype.configure",
+    "GPUCanvasContext.prototype.getConfiguration",
     "GPUCanvasContext.prototype.getCurrentTexture",
     "GPUCanvasContext.prototype.unconfigure",
     "GPUColorWrite",
@@ -4118,7 +4120,6 @@
     "Option.prototype.constructor.prototype.getElementsByTagName",
     "Option.prototype.constructor.prototype.getElementsByTagNameNS",
     "Option.prototype.constructor.prototype.getHTML",
-    "Option.prototype.constructor.prototype.getInnerHTML",
     "Option.prototype.constructor.prototype.hasAttribute",
     "Option.prototype.constructor.prototype.hasAttributeNS",
     "Option.prototype.constructor.prototype.hasAttributes",
@@ -5092,6 +5093,7 @@
     "Request.prototype.clone",
     "Request.prototype.credentials",
     "Request.prototype.destination",
+    "Request.prototype.duplex",
     "Request.prototype.formData",
     "Request.prototype.headers",
     "Request.prototype.integrity",
@@ -6106,7 +6108,6 @@
     "ShadowRoot.prototype.getAnimations",
     "ShadowRoot.prototype.getElementById",
     "ShadowRoot.prototype.getHTML",
-    "ShadowRoot.prototype.getInnerHTML",
     "ShadowRoot.prototype.getSelection",
     "ShadowRoot.prototype.host",
     "ShadowRoot.prototype.innerHTML",
@@ -7959,14 +7960,25 @@
     "XRFrame",
     "XRFrame.prototype",
     "XRFrame.prototype.createAnchor",
+    "XRFrame.prototype.fillJointRadii",
+    "XRFrame.prototype.fillPoses",
     "XRFrame.prototype.getDepthInformation",
     "XRFrame.prototype.getHitTestResults",
     "XRFrame.prototype.getHitTestResultsForTransientInput",
+    "XRFrame.prototype.getJointPose",
     "XRFrame.prototype.getLightEstimate",
     "XRFrame.prototype.getPose",
     "XRFrame.prototype.getViewerPose",
     "XRFrame.prototype.session",
     "XRFrame.prototype.trackedAnchors",
+    "XRHand",
+    "XRHand.prototype",
+    "XRHand.prototype.entries",
+    "XRHand.prototype.forEach",
+    "XRHand.prototype.get",
+    "XRHand.prototype.keys",
+    "XRHand.prototype.size",
+    "XRHand.prototype.values",
     "XRHitTestResult",
     "XRHitTestResult.prototype",
     "XRHitTestResult.prototype.createAnchor",
@@ -7978,6 +7990,7 @@
     "XRInputSource.prototype",
     "XRInputSource.prototype.gamepad",
     "XRInputSource.prototype.gripSpace",
+    "XRInputSource.prototype.hand",
     "XRInputSource.prototype.handedness",
     "XRInputSource.prototype.profiles",
     "XRInputSource.prototype.targetRayMode",
@@ -7994,6 +8007,12 @@
     "XRInputSourcesChangeEvent.prototype.added",
     "XRInputSourcesChangeEvent.prototype.removed",
     "XRInputSourcesChangeEvent.prototype.session",
+    "XRJointPose",
+    "XRJointPose.prototype",
+    "XRJointPose.prototype.radius",
+    "XRJointSpace",
+    "XRJointSpace.prototype",
+    "XRJointSpace.prototype.jointName",
     "XRLayer",
     "XRLayer.prototype",
     "XRLightEstimate",
```

  
#### 130.0.6723.116 (`2024-11-5`) 
No browser API changes.

  
#### 130.0.6723.91 (`2024-10-29`) 
No browser API changes.

  
#### 130.0.6723.69 (`2024-10-22`) 
No browser API changes.

  
#### 130.0.6723.58 (`2024-10-15`) ⚡
Added 11 APIs, removed 9 (see: [diff](./browser_apis/chrome-stable_129.0.6668.100_to_130.0.6723.58.diff), [json](./browser_apis/chrome-stable_129.0.6668.100_to_130.0.6723.58.json), [full list](./browser_apis/chrome-stable_130.0.6723.58.json))
 ```diff
--- ./browser_apis/chrome-stable_129.0.6668.100.json	2024-10-16 01:12:02.182367389 +0000
+++ ./browser_apis/chrome-stable_130.0.6723.58.json	2024-10-16 01:12:21.030124622 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8515,
+  "browserApiCount": 8517,
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
@@ -2988,6 +2990,13 @@
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
@@ -3563,14 +3572,6 @@
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
@@ -6024,6 +6025,7 @@
     "SerialPort",
     "SerialPort.prototype",
     "SerialPort.prototype.close",
+    "SerialPort.prototype.connected",
     "SerialPort.prototype.forget",
     "SerialPort.prototype.getInfo",
     "SerialPort.prototype.getSignals",
```

  
#### 129.0.6668.100 (`2024-10-8`) 
No browser API changes.

  
#### 129.0.6668.89 (`2024-10-1`) 
No browser API changes.

  
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

  
### chrome-unstable
  
#### 136.0.7081.2 (`2025-3-24`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_136.0.7064.0_to_136.0.7081.2.diff), [json](./browser_apis/chrome-unstable_136.0.7064.0_to_136.0.7081.2.json), [full list](./browser_apis/chrome-unstable_136.0.7081.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_136.0.7064.0.json	2025-03-25 01:17:09.861916929 +0000
+++ ./browser_apis/chrome-unstable_136.0.7081.2.json	2025-03-25 01:17:52.694034645 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8696,
+  "browserApiCount": 8698,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -909,6 +909,7 @@
     "CanvasRenderingContext2D.prototype.isContextLost",
     "CanvasRenderingContext2D.prototype.isPointInPath",
     "CanvasRenderingContext2D.prototype.isPointInStroke",
+    "CanvasRenderingContext2D.prototype.lang",
     "CanvasRenderingContext2D.prototype.letterSpacing",
     "CanvasRenderingContext2D.prototype.lineCap",
     "CanvasRenderingContext2D.prototype.lineDashOffset",
@@ -4063,6 +4064,7 @@
     "OffscreenCanvasRenderingContext2D.prototype.isContextLost",
     "OffscreenCanvasRenderingContext2D.prototype.isPointInPath",
     "OffscreenCanvasRenderingContext2D.prototype.isPointInStroke",
+    "OffscreenCanvasRenderingContext2D.prototype.lang",
     "OffscreenCanvasRenderingContext2D.prototype.letterSpacing",
     "OffscreenCanvasRenderingContext2D.prototype.lineCap",
     "OffscreenCanvasRenderingContext2D.prototype.lineDashOffset",
```

  
#### 136.0.7064.0 (`2025-3-13`) ⚡
Added 31 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_136.0.7052.2_to_136.0.7064.0.diff), [json](./browser_apis/chrome-unstable_136.0.7052.2_to_136.0.7064.0.json), [full list](./browser_apis/chrome-unstable_136.0.7064.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_136.0.7052.2.json	2025-03-14 01:14:27.583868947 +0000
+++ ./browser_apis/chrome-unstable_136.0.7064.0.json	2025-03-14 01:15:03.339882326 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8665,
+  "browserApiCount": 8696,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -3957,6 +3957,28 @@
     "Object.seal",
     "Object.setPrototypeOf",
     "Object.values",
+    "Observable",
+    "Observable.from",
+    "Observable.prototype",
+    "Observable.prototype.catch",
+    "Observable.prototype.drop",
+    "Observable.prototype.every",
+    "Observable.prototype.filter",
+    "Observable.prototype.finally",
+    "Observable.prototype.find",
+    "Observable.prototype.first",
+    "Observable.prototype.flatMap",
+    "Observable.prototype.forEach",
+    "Observable.prototype.inspect",
+    "Observable.prototype.last",
+    "Observable.prototype.map",
+    "Observable.prototype.reduce",
+    "Observable.prototype.some",
+    "Observable.prototype.subscribe",
+    "Observable.prototype.switchMap",
+    "Observable.prototype.take",
+    "Observable.prototype.takeUntil",
+    "Observable.prototype.toArray",
     "OfflineAudioCompletionEvent",
     "OfflineAudioCompletionEvent.prototype",
     "OfflineAudioCompletionEvent.prototype.renderedBuffer",
@@ -4190,6 +4212,7 @@
     "Option.prototype.constructor.prototype.constructor.prototype.removeEventListener",
     "Option.prototype.constructor.prototype.constructor.prototype.replaceChild",
     "Option.prototype.constructor.prototype.constructor.prototype.textContent",
+    "Option.prototype.constructor.prototype.constructor.prototype.when",
     "Option.prototype.constructor.prototype.contentEditable",
     "Option.prototype.constructor.prototype.currentCSSZoom",
     "Option.prototype.constructor.prototype.dataset",
@@ -6464,6 +6487,14 @@
     "SubmitEvent",
     "SubmitEvent.prototype",
     "SubmitEvent.prototype.submitter",
+    "Subscriber",
+    "Subscriber.prototype",
+    "Subscriber.prototype.active",
+    "Subscriber.prototype.addTeardown",
+    "Subscriber.prototype.complete",
+    "Subscriber.prototype.error",
+    "Subscriber.prototype.next",
+    "Subscriber.prototype.signal",
     "SubtleCrypto",
     "SubtleCrypto.prototype",
     "SubtleCrypto.prototype.decrypt",
```

  
#### 136.0.7052.2 (`2025-3-7`) ⚡
Added 14 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_135.0.7039.0_to_136.0.7052.2.diff), [json](./browser_apis/chrome-unstable_135.0.7039.0_to_136.0.7052.2.json), [full list](./browser_apis/chrome-unstable_136.0.7052.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_135.0.7039.0.json	2025-03-08 00:59:45.926877903 +0000
+++ ./browser_apis/chrome-unstable_136.0.7052.2.json	2025-03-08 01:00:31.158651317 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8651,
+  "browserApiCount": 8665,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -991,6 +991,10 @@
     "CloseWatcher.prototype.oncancel",
     "CloseWatcher.prototype.onclose",
     "CloseWatcher.prototype.requestClose",
+    "CommandEvent",
+    "CommandEvent.prototype",
+    "CommandEvent.prototype.command",
+    "CommandEvent.prototype.source",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -2067,6 +2071,8 @@
     "HTMLButtonElement",
     "HTMLButtonElement.prototype",
     "HTMLButtonElement.prototype.checkValidity",
+    "HTMLButtonElement.prototype.command",
+    "HTMLButtonElement.prototype.commandForElement",
     "HTMLButtonElement.prototype.disabled",
     "HTMLButtonElement.prototype.form",
     "HTMLButtonElement.prototype.formAction",
@@ -3345,6 +3351,7 @@
     "MathMLElement.prototype.onchange",
     "MathMLElement.prototype.onclick",
     "MathMLElement.prototype.onclose",
+    "MathMLElement.prototype.oncommand",
     "MathMLElement.prototype.oncontentvisibilityautostatechange",
     "MathMLElement.prototype.oncontextlost",
     "MathMLElement.prototype.oncontextmenu",
@@ -4252,6 +4259,7 @@
     "Option.prototype.constructor.prototype.onchange",
     "Option.prototype.constructor.prototype.onclick",
     "Option.prototype.constructor.prototype.onclose",
+    "Option.prototype.constructor.prototype.oncommand",
     "Option.prototype.constructor.prototype.oncontentvisibilityautostatechange",
     "Option.prototype.constructor.prototype.oncontextlost",
     "Option.prototype.constructor.prototype.oncontextmenu",
@@ -5138,6 +5146,7 @@
     "RegExp.$9",
     "RegExp.$_",
     "RegExp.# WIP

## Browser APIs

",
+    "RegExp.escape",
     "RegExp.input",
     "RegExp.lastMatch",
     "RegExp.lastParen",
@@ -5247,6 +5256,8 @@
     "SVGAElement",
     "SVGAElement.prototype",
     "SVGAElement.prototype.href",
+    "SVGAElement.prototype.rel",
+    "SVGAElement.prototype.relList",
     "SVGAElement.prototype.target",
     "SVGAngle",
     "SVGAngle.prototype",
@@ -5931,6 +5942,7 @@
     "SVGViewElement.prototype.onchange",
     "SVGViewElement.prototype.onclick",
     "SVGViewElement.prototype.onclose",
+    "SVGViewElement.prototype.oncommand",
     "SVGViewElement.prototype.oncontentvisibilityautostatechange",
     "SVGViewElement.prototype.oncontextlost",
     "SVGViewElement.prototype.oncontextmenu",
@@ -7843,6 +7855,7 @@
     "XMLDocument.prototype.onchange",
     "XMLDocument.prototype.onclick",
     "XMLDocument.prototype.onclose",
+    "XMLDocument.prototype.oncommand",
     "XMLDocument.prototype.oncontentvisibilityautostatechange",
     "XMLDocument.prototype.oncontextlost",
     "XMLDocument.prototype.oncontextmenu",
@@ -8373,6 +8386,7 @@
     "onchange",
     "onclick",
     "onclose",
+    "oncommand",
     "oncontentvisibilityautostatechange",
     "oncontextlost",
     "oncontextmenu",
```

  
#### 135.0.7039.0 (`2025-3-3`) ⚡
Added 9 APIs, removed 2 (see: [diff](./browser_apis/chrome-unstable_135.0.7023.0_to_135.0.7039.0.diff), [json](./browser_apis/chrome-unstable_135.0.7023.0_to_135.0.7039.0.json), [full list](./browser_apis/chrome-unstable_135.0.7039.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_135.0.7023.0.json	2025-03-04 01:14:39.743035783 +0000
+++ ./browser_apis/chrome-unstable_135.0.7039.0.json	2025-03-04 01:15:11.055015808 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8644,
+  "browserApiCount": 8651,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -1190,6 +1190,7 @@
     "DataView.prototype.byteOffset",
     "DataView.prototype.getBigInt64",
     "DataView.prototype.getBigUint64",
+    "DataView.prototype.getFloat16",
     "DataView.prototype.getFloat32",
     "DataView.prototype.getFloat64",
     "DataView.prototype.getInt16",
@@ -1200,6 +1201,7 @@
     "DataView.prototype.getUint8",
     "DataView.prototype.setBigInt64",
     "DataView.prototype.setBigUint64",
+    "DataView.prototype.setFloat16",
     "DataView.prototype.setFloat32",
     "DataView.prototype.setFloat64",
     "DataView.prototype.setInt16",
@@ -1488,6 +1490,9 @@
     "FencedFrameConfig",
     "FencedFrameConfig.prototype",
     "FencedFrameConfig.prototype.setSharedStorageContext",
+    "FetchLaterResult",
+    "FetchLaterResult.prototype",
+    "FetchLaterResult.prototype.activated",
     "File",
     "File.prototype",
     "File.prototype.arrayBuffer",
@@ -1556,6 +1561,8 @@
     "FinalizationRegistry.prototype",
     "FinalizationRegistry.prototype.register",
     "FinalizationRegistry.prototype.unregister",
+    "Float16Array",
+    "Float16Array.prototype",
     "Float32Array",
     "Float32Array.prototype",
     "Float64Array",
@@ -3293,6 +3300,7 @@
     "Math.cosh",
     "Math.exp",
     "Math.expm1",
+    "Math.f16round",
     "Math.floor",
     "Math.fround",
     "Math.hypot",
@@ -3665,7 +3673,6 @@
     "NavigateEvent",
     "NavigateEvent.prototype",
     "NavigateEvent.prototype.canIntercept",
-    "NavigateEvent.prototype.canTransition",
     "NavigateEvent.prototype.destination",
     "NavigateEvent.prototype.downloadRequest",
     "NavigateEvent.prototype.formData",
@@ -8194,7 +8201,6 @@
     "XRSystem.prototype.isSessionSupported",
     "XRSystem.prototype.ondevicechange",
     "XRSystem.prototype.requestSession",
-    "XRSystem.prototype.supportsSession",
     "XRTransientInputHitTestResult",
     "XRTransientInputHitTestResult.prototype",
     "XRTransientInputHitTestResult.prototype.inputSource",
@@ -8318,6 +8324,7 @@
     "external",
     "fence",
     "fetch",
+    "fetchLater",
     "find",
     "focus",
     "frameElement",
```

  
#### 135.0.7023.0 (`2025-2-20`) ⚡
Added 17 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_135.0.7012.4_to_135.0.7023.0.diff), [json](./browser_apis/chrome-unstable_135.0.7012.4_to_135.0.7023.0.json), [full list](./browser_apis/chrome-unstable_135.0.7023.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_135.0.7012.4.json	2025-02-21 01:12:20.853119031 +0000
+++ ./browser_apis/chrome-unstable_135.0.7023.0.json	2025-02-21 01:13:17.617356547 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8627,
+  "browserApiCount": 8644,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -1353,6 +1353,7 @@
     "EditContext.prototype.updateText",
     "ElementInternals",
     "ElementInternals.prototype",
+    "ElementInternals.prototype.ariaActiveDescendantElement",
     "ElementInternals.prototype.ariaAtomic",
     "ElementInternals.prototype.ariaAutoComplete",
     "ElementInternals.prototype.ariaBrailleLabel",
@@ -1363,15 +1364,21 @@
     "ElementInternals.prototype.ariaColIndex",
     "ElementInternals.prototype.ariaColIndexText",
     "ElementInternals.prototype.ariaColSpan",
+    "ElementInternals.prototype.ariaControlsElements",
     "ElementInternals.prototype.ariaCurrent",
+    "ElementInternals.prototype.ariaDescribedByElements",
     "ElementInternals.prototype.ariaDescription",
+    "ElementInternals.prototype.ariaDetailsElements",
     "ElementInternals.prototype.ariaDisabled",
+    "ElementInternals.prototype.ariaErrorMessageElements",
     "ElementInternals.prototype.ariaExpanded",
+    "ElementInternals.prototype.ariaFlowToElements",
     "ElementInternals.prototype.ariaHasPopup",
     "ElementInternals.prototype.ariaHidden",
     "ElementInternals.prototype.ariaInvalid",
     "ElementInternals.prototype.ariaKeyShortcuts",
     "ElementInternals.prototype.ariaLabel",
+    "ElementInternals.prototype.ariaLabelledByElements",
     "ElementInternals.prototype.ariaLevel",
     "ElementInternals.prototype.ariaLive",
     "ElementInternals.prototype.ariaModal",
@@ -2518,6 +2525,8 @@
     "HTMLSelectElement.prototype.validity",
     "HTMLSelectElement.prototype.value",
     "HTMLSelectElement.prototype.willValidate",
+    "HTMLSelectedContentElement",
+    "HTMLSelectedContentElement.prototype",
     "HTMLSlotElement",
     "HTMLSlotElement.prototype",
     "HTMLSlotElement.prototype.assign",
@@ -3667,6 +3676,7 @@
     "NavigateEvent.prototype.navigationType",
     "NavigateEvent.prototype.scroll",
     "NavigateEvent.prototype.signal",
+    "NavigateEvent.prototype.sourceElement",
     "NavigateEvent.prototype.userInitiated",
     "Navigation",
     "Navigation.prototype",
@@ -4060,6 +4070,7 @@
     "Option.prototype.constructor.prototype.after",
     "Option.prototype.constructor.prototype.animate",
     "Option.prototype.constructor.prototype.append",
+    "Option.prototype.constructor.prototype.ariaActiveDescendantElement",
     "Option.prototype.constructor.prototype.ariaAtomic",
     "Option.prototype.constructor.prototype.ariaAutoComplete",
     "Option.prototype.constructor.prototype.ariaBrailleLabel",
@@ -4070,15 +4081,21 @@
     "Option.prototype.constructor.prototype.ariaColIndex",
     "Option.prototype.constructor.prototype.ariaColIndexText",
     "Option.prototype.constructor.prototype.ariaColSpan",
+    "Option.prototype.constructor.prototype.ariaControlsElements",
     "Option.prototype.constructor.prototype.ariaCurrent",
+    "Option.prototype.constructor.prototype.ariaDescribedByElements",
     "Option.prototype.constructor.prototype.ariaDescription",
+    "Option.prototype.constructor.prototype.ariaDetailsElements",
     "Option.prototype.constructor.prototype.ariaDisabled",
+    "Option.prototype.constructor.prototype.ariaErrorMessageElements",
     "Option.prototype.constructor.prototype.ariaExpanded",
+    "Option.prototype.constructor.prototype.ariaFlowToElements",
     "Option.prototype.constructor.prototype.ariaHasPopup",
     "Option.prototype.constructor.prototype.ariaHidden",
     "Option.prototype.constructor.prototype.ariaInvalid",
     "Option.prototype.constructor.prototype.ariaKeyShortcuts",
     "Option.prototype.constructor.prototype.ariaLabel",
+    "Option.prototype.constructor.prototype.ariaLabelledByElements",
     "Option.prototype.constructor.prototype.ariaLevel",
     "Option.prototype.constructor.prototype.ariaLive",
     "Option.prototype.constructor.prototype.ariaModal",
```

  
#### 135.0.7012.4 (`2025-2-13`) ⚡
Added 0 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_135.0.6999.2_to_135.0.7012.4.diff), [json](./browser_apis/chrome-unstable_135.0.6999.2_to_135.0.7012.4.json), [full list](./browser_apis/chrome-unstable_135.0.7012.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_135.0.6999.2.json	2025-02-14 01:11:23.576987714 +0000
+++ ./browser_apis/chrome-unstable_135.0.7012.4.json	2025-02-14 01:11:44.536787841 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8628,
+  "browserApiCount": 8627,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -1829,7 +1829,6 @@
     "GPUSupportedLimits.prototype.maxComputeWorkgroupsPerDimension",
     "GPUSupportedLimits.prototype.maxDynamicStorageBuffersPerPipelineLayout",
     "GPUSupportedLimits.prototype.maxDynamicUniformBuffersPerPipelineLayout",
-    "GPUSupportedLimits.prototype.maxInterStageShaderComponents",
     "GPUSupportedLimits.prototype.maxInterStageShaderVariables",
     "GPUSupportedLimits.prototype.maxSampledTexturesPerShaderStage",
     "GPUSupportedLimits.prototype.maxSamplersPerShaderStage",
```

  
#### 135.0.6999.2 (`2025-2-6`) 
No browser API changes.

  
#### 134.0.6988.2 (`2025-1-31`) ⚡
Added 13 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_134.0.6974.3_to_134.0.6988.2.diff), [json](./browser_apis/chrome-unstable_134.0.6974.3_to_134.0.6988.2.json), [full list](./browser_apis/chrome-unstable_134.0.6988.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_134.0.6974.3.json	2025-02-01 01:14:00.170095101 +0000
+++ ./browser_apis/chrome-unstable_134.0.6988.2.json	2025-02-01 01:14:35.730521471 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8615,
+  "browserApiCount": 8628,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -2097,7 +2097,9 @@
     "HTMLDialogElement",
     "HTMLDialogElement.prototype",
     "HTMLDialogElement.prototype.close",
+    "HTMLDialogElement.prototype.closedBy",
     "HTMLDialogElement.prototype.open",
+    "HTMLDialogElement.prototype.requestClose",
     "HTMLDialogElement.prototype.returnValue",
     "HTMLDialogElement.prototype.show",
     "HTMLDialogElement.prototype.showModal",
@@ -4005,6 +4007,7 @@
     "OffscreenCanvasRenderingContext2D.prototype.fontKerning",
     "OffscreenCanvasRenderingContext2D.prototype.fontStretch",
     "OffscreenCanvasRenderingContext2D.prototype.fontVariantCaps",
+    "OffscreenCanvasRenderingContext2D.prototype.getContextAttributes",
     "OffscreenCanvasRenderingContext2D.prototype.getImageData",
     "OffscreenCanvasRenderingContext2D.prototype.getLineDash",
     "OffscreenCanvasRenderingContext2D.prototype.getTransform",
@@ -6197,6 +6200,7 @@
     "SharedStorage",
     "SharedStorage.prototype",
     "SharedStorage.prototype.append",
+    "SharedStorage.prototype.batchUpdate",
     "SharedStorage.prototype.clear",
     "SharedStorage.prototype.createWorklet",
     "SharedStorage.prototype.delete",
@@ -6205,6 +6209,15 @@
     "SharedStorage.prototype.selectURL",
     "SharedStorage.prototype.set",
     "SharedStorage.prototype.worklet",
+    "SharedStorageAppendMethod",
+    "SharedStorageAppendMethod.prototype",
+    "SharedStorageAppendMethod.prototype.constructor",
+    "SharedStorageClearMethod",
+    "SharedStorageClearMethod.prototype",
+    "SharedStorageDeleteMethod",
+    "SharedStorageDeleteMethod.prototype",
+    "SharedStorageSetMethod",
+    "SharedStorageSetMethod.prototype",
     "SharedStorageWorklet",
     "SharedStorageWorklet.prototype",
     "SharedStorageWorklet.prototype.addModule",
```

  
#### 134.0.6974.3 (`2025-1-24`) ⚡
Added 11 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_134.0.6958.2_to_134.0.6974.3.diff), [json](./browser_apis/chrome-unstable_134.0.6958.2_to_134.0.6974.3.json), [full list](./browser_apis/chrome-unstable_134.0.6974.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_134.0.6958.2.json	2025-01-25 01:06:31.095530173 +0000
+++ ./browser_apis/chrome-unstable_134.0.6974.3.json	2025-01-25 01:07:06.543253723 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8604,
+  "browserApiCount": 8615,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -512,6 +512,15 @@
     "CSSFontFaceRule",
     "CSSFontFaceRule.prototype",
     "CSSFontFaceRule.prototype.style",
+    "CSSFontFeatureValuesRule",
+    "CSSFontFeatureValuesRule.prototype",
+    "CSSFontFeatureValuesRule.prototype.annotation",
+    "CSSFontFeatureValuesRule.prototype.characterVariant",
+    "CSSFontFeatureValuesRule.prototype.fontFamily",
+    "CSSFontFeatureValuesRule.prototype.ornaments",
+    "CSSFontFeatureValuesRule.prototype.styleset",
+    "CSSFontFeatureValuesRule.prototype.stylistic",
+    "CSSFontFeatureValuesRule.prototype.swash",
     "CSSFontPaletteValuesRule",
     "CSSFontPaletteValuesRule.prototype",
     "CSSFontPaletteValuesRule.prototype.basePalette",
@@ -1608,6 +1617,8 @@
     "GPUAdapterInfo.prototype.architecture",
     "GPUAdapterInfo.prototype.description",
     "GPUAdapterInfo.prototype.device",
+    "GPUAdapterInfo.prototype.subgroupMaxSize",
+    "GPUAdapterInfo.prototype.subgroupMinSize",
     "GPUAdapterInfo.prototype.vendor",
     "GPUBindGroup",
     "GPUBindGroup.prototype",
```

  
#### 134.0.6958.2 (`2025-1-16`) ⚡
Added 23 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_133.0.6943.6_to_134.0.6958.2.diff), [json](./browser_apis/chrome-unstable_133.0.6943.6_to_134.0.6958.2.json), [full list](./browser_apis/chrome-unstable_134.0.6958.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_133.0.6943.6.json	2025-01-17 01:09:33.253330925 +0000
+++ ./browser_apis/chrome-unstable_134.0.6958.2.json	2025-01-17 01:10:43.062095356 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8581,
+  "browserApiCount": 8604,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -101,6 +101,14 @@
     "ArrayBuffer.prototype.slice",
     "ArrayBuffer.prototype.transfer",
     "ArrayBuffer.prototype.transferToFixedLength",
+    "AsyncDisposableStack",
+    "AsyncDisposableStack.prototype",
+    "AsyncDisposableStack.prototype.adopt",
+    "AsyncDisposableStack.prototype.defer",
+    "AsyncDisposableStack.prototype.disposeAsync",
+    "AsyncDisposableStack.prototype.disposed",
+    "AsyncDisposableStack.prototype.move",
+    "AsyncDisposableStack.prototype.use",
     "Atomics",
     "Atomics.add",
     "Atomics.and",
@@ -1278,6 +1286,14 @@
     "DevicePosture.prototype",
     "DevicePosture.prototype.onchange",
     "DevicePosture.prototype.type",
+    "DisposableStack",
+    "DisposableStack.prototype",
+    "DisposableStack.prototype.adopt",
+    "DisposableStack.prototype.defer",
+    "DisposableStack.prototype.dispose",
+    "DisposableStack.prototype.disposed",
+    "DisposableStack.prototype.move",
+    "DisposableStack.prototype.use",
     "DocumentPictureInPicture",
     "DocumentPictureInPicture.prototype",
     "DocumentPictureInPicture.prototype.onenter",
@@ -1399,6 +1415,7 @@
     "EncodedVideoChunk.prototype.type",
     "Error",
     "Error.captureStackTrace",
+    "Error.isError",
     "Error.prototype",
     "Error.prototype.toString",
     "ErrorEvent",
@@ -1509,6 +1526,10 @@
     "FileSystemFileHandle.prototype.createWritable",
     "FileSystemFileHandle.prototype.getFile",
     "FileSystemFileHandle.prototype.move",
+    "FileSystemObserver",
+    "FileSystemObserver.prototype",
+    "FileSystemObserver.prototype.disconnect",
+    "FileSystemObserver.prototype.observe",
     "FileSystemWritableFileStream",
     "FileSystemWritableFileStream.prototype",
     "FileSystemWritableFileStream.prototype.mode",
@@ -6398,6 +6419,8 @@
     "SubtleCrypto.prototype.unwrapKey",
     "SubtleCrypto.prototype.verify",
     "SubtleCrypto.prototype.wrapKey",
+    "SuppressedError",
+    "SuppressedError.prototype",
     "Symbol",
     "Symbol.for",
     "Symbol.keyFor",
```

  
#### 133.0.6943.6 (`2025-1-9`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_133.0.6905.0_to_133.0.6943.6.diff), [json](./browser_apis/chrome-unstable_133.0.6905.0_to_133.0.6943.6.json), [full list](./browser_apis/chrome-unstable_133.0.6943.6.json))
 ```diff
--- ./browser_apis/chrome-unstable_133.0.6905.0.json	2025-01-10 01:13:38.007431384 +0000
+++ ./browser_apis/chrome-unstable_133.0.6943.6.json	2025-01-10 01:14:05.067539804 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8577,
+  "browserApiCount": 8581,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -2856,6 +2856,7 @@
     "Image.prototype.alt",
     "Image.prototype.attributionSrc",
     "Image.prototype.border",
+    "Image.prototype.browsingTopics",
     "Image.prototype.complete",
     "Image.prototype.constructor",
     "Image.prototype.crossOrigin",
@@ -4165,6 +4166,7 @@
     "Option.prototype.constructor.prototype.lastElementChild",
     "Option.prototype.constructor.prototype.localName",
     "Option.prototype.constructor.prototype.matches",
+    "Option.prototype.constructor.prototype.moveBefore",
     "Option.prototype.constructor.prototype.namespaceURI",
     "Option.prototype.constructor.prototype.nextElementSibling",
     "Option.prototype.constructor.prototype.nonce",
@@ -6148,6 +6150,7 @@
     "ShadowRoot.prototype.innerHTML",
     "ShadowRoot.prototype.lastElementChild",
     "ShadowRoot.prototype.mode",
+    "ShadowRoot.prototype.moveBefore",
     "ShadowRoot.prototype.onslotchange",
     "ShadowRoot.prototype.pictureInPictureElement",
     "ShadowRoot.prototype.pointerLockElement",
@@ -7750,6 +7753,7 @@
     "XMLDocument.prototype.lastModified",
     "XMLDocument.prototype.linkColor",
     "XMLDocument.prototype.links",
+    "XMLDocument.prototype.moveBefore",
     "XMLDocument.prototype.onabort",
     "XMLDocument.prototype.onanimationend",
     "XMLDocument.prototype.onanimationiteration",
```

  
#### 133.0.6905.0 (`2024-12-20`) 
No browser API changes.

  
#### 133.0.6888.2 (`2024-12-12`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_133.0.6876.4_to_133.0.6888.2.diff), [json](./browser_apis/chrome-unstable_133.0.6876.4_to_133.0.6888.2.json), [full list](./browser_apis/chrome-unstable_133.0.6888.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_133.0.6876.4.json	2024-12-13 01:18:52.651775575 +0000
+++ ./browser_apis/chrome-unstable_133.0.6888.2.json	2024-12-13 01:19:47.091860938 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8575,
+  "browserApiCount": 8577,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -1960,6 +1960,7 @@
     "HTMLAreaElement",
     "HTMLAreaElement.prototype",
     "HTMLAreaElement.prototype.alt",
+    "HTMLAreaElement.prototype.attributionSrc",
     "HTMLAreaElement.prototype.coords",
     "HTMLAreaElement.prototype.download",
     "HTMLAreaElement.prototype.hash",
@@ -4757,6 +4758,7 @@
     "Proxy",
     "Proxy.revocable",
     "PublicKeyCredential",
+    "PublicKeyCredential.getClientCapabilities",
     "PublicKeyCredential.isConditionalMediationAvailable",
     "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable",
     "PublicKeyCredential.parseCreationOptionsFromJSON",
```

  
#### 133.0.6876.4 (`2024-12-5`) ⚡
Added 26 APIs, removed 7 (see: [diff](./browser_apis/chrome-unstable_133.0.6847.2_to_133.0.6876.4.diff), [json](./browser_apis/chrome-unstable_133.0.6847.2_to_133.0.6876.4.json), [full list](./browser_apis/chrome-unstable_133.0.6876.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_133.0.6847.2.json	2024-12-06 01:17:17.174768734 +0000
+++ ./browser_apis/chrome-unstable_133.0.6876.4.json	2024-12-06 01:17:49.166737937 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8556,
+  "browserApiCount": 8575,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -110,6 +110,7 @@
     "Atomics.load",
     "Atomics.notify",
     "Atomics.or",
+    "Atomics.pause",
     "Atomics.store",
     "Atomics.sub",
     "Atomics.wait",
@@ -396,6 +397,20 @@
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
@@ -756,6 +771,7 @@
     "CSSTransition.prototype.oncancel",
     "CSSTransition.prototype.onfinish",
     "CSSTransition.prototype.onremove",
+    "CSSTransition.prototype.overallProgress",
     "CSSTransition.prototype.pause",
     "CSSTransition.prototype.pending",
     "CSSTransition.prototype.persist",
@@ -1272,9 +1288,6 @@
     "DocumentPictureInPictureEvent.prototype.window",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
-    "DocumentTimeline.prototype.constructor",
-    "DocumentTimeline.prototype.currentTime",
-    "DocumentTimeline.prototype.duration",
     "DocumentType",
     "DocumentType.prototype",
     "DocumentType.prototype.after",
@@ -4536,6 +4549,7 @@
     "PerformanceResourceTiming.prototype.domainLookupStart",
     "PerformanceResourceTiming.prototype.encodedBodySize",
     "PerformanceResourceTiming.prototype.fetchStart",
+    "PerformanceResourceTiming.prototype.finalResponseHeadersStart",
     "PerformanceResourceTiming.prototype.firstInterimResponseStart",
     "PerformanceResourceTiming.prototype.initiatorType",
     "PerformanceResourceTiming.prototype.nextHopProtocol",
@@ -5093,6 +5107,9 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
+    "ReportBody",
+    "ReportBody.prototype",
+    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
@@ -5988,10 +6005,6 @@
     "ScriptProcessorNode.prototype",
     "ScriptProcessorNode.prototype.bufferSize",
     "ScriptProcessorNode.prototype.onaudioprocess",
-    "ScrollTimeline",
-    "ScrollTimeline.prototype",
-    "ScrollTimeline.prototype.axis",
-    "ScrollTimeline.prototype.source",
     "SecurityPolicyViolationEvent",
     "SecurityPolicyViolationEvent.prototype",
     "SecurityPolicyViolationEvent.prototype.blockedURI",
@@ -6872,7 +6885,13 @@
     "VideoPlaybackQuality.prototype.totalVideoFrames",
     "ViewTimeline",
     "ViewTimeline.prototype",
+    "ViewTimeline.prototype.axis",
+    "ViewTimeline.prototype.constructor",
+    "ViewTimeline.prototype.constructor.prototype",
+    "ViewTimeline.prototype.constructor.prototype.currentTime",
+    "ViewTimeline.prototype.constructor.prototype.duration",
     "ViewTimeline.prototype.endOffset",
+    "ViewTimeline.prototype.source",
     "ViewTimeline.prototype.startOffset",
     "ViewTimeline.prototype.subject",
     "ViewTransition",
```

  
#### 133.0.6847.2 (`2024-11-21`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_133.0.6835.3_to_133.0.6847.2.diff), [json](./browser_apis/chrome-unstable_133.0.6835.3_to_133.0.6847.2.json), [full list](./browser_apis/chrome-unstable_133.0.6847.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_133.0.6835.3.json	2024-11-22 01:15:24.339585110 +0000
+++ ./browser_apis/chrome-unstable_133.0.6847.2.json	2024-11-22 01:16:19.780654637 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8552,
+  "browserApiCount": 8556,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -389,6 +389,7 @@
     "BrowserCaptureMediaStreamTrack",
     "BrowserCaptureMediaStreamTrack.prototype",
     "BrowserCaptureMediaStreamTrack.prototype.cropTo",
+    "BrowserCaptureMediaStreamTrack.prototype.restrictTo",
     "ByteLengthQueuingStrategy",
     "ByteLengthQueuingStrategy.prototype",
     "ByteLengthQueuingStrategy.prototype.highWaterMark",
@@ -5161,6 +5162,9 @@
     "Response.prototype.type",
     "Response.prototype.url",
     "Response.redirect",
+    "RestrictionTarget",
+    "RestrictionTarget.fromElement",
+    "RestrictionTarget.prototype",
     "SVGAElement",
     "SVGAElement.prototype",
     "SVGAElement.prototype.href",
```

  
#### 133.0.6835.3 (`2024-11-14`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_132.0.6821.2_to_133.0.6835.3.diff), [json](./browser_apis/chrome-unstable_132.0.6821.2_to_133.0.6835.3.json), [full list](./browser_apis/chrome-unstable_133.0.6835.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_132.0.6821.2.json	2024-11-15 01:15:29.136658000 +0000
+++ ./browser_apis/chrome-unstable_133.0.6835.3.json	2024-11-15 01:15:50.068761723 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8549,
+  "browserApiCount": 8552,
   "browserApis": [
     "AICreateMonitor",
     "AICreateMonitor.prototype",
@@ -1646,6 +1646,7 @@
     "GPUComputePipeline.prototype.label",
     "GPUDevice",
     "GPUDevice.prototype",
+    "GPUDevice.prototype.adapterInfo",
     "GPUDevice.prototype.createBindGroup",
     "GPUDevice.prototype.createBindGroupLayout",
     "GPUDevice.prototype.createBuffer",
@@ -2822,6 +2823,7 @@
     "IdentityProvider.close",
     "IdentityProvider.getUserInfo",
     "IdentityProvider.prototype",
+    "IdentityProvider.resolve",
     "IdleDeadline",
     "IdleDeadline.prototype",
     "IdleDeadline.prototype.didTimeout",
@@ -3696,6 +3698,7 @@
     "Navigator.prototype.getBattery",
     "Navigator.prototype.getGamepads",
     "Navigator.prototype.getInstalledRelatedApps",
+    "Navigator.prototype.getInterestGroupAdAuctionData",
     "Navigator.prototype.getUserMedia",
     "Navigator.prototype.gpu",
     "Navigator.prototype.hardwareConcurrency",
```

  
#### 132.0.6821.2 (`2024-11-7`) 
No browser API changes.

  
#### 132.0.6811.2 (`2024-11-5`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_132.0.6793.2_to_132.0.6811.2.diff), [json](./browser_apis/chrome-unstable_132.0.6793.2_to_132.0.6811.2.json), [full list](./browser_apis/chrome-unstable_132.0.6811.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_132.0.6793.2.json	2024-11-06 01:10:05.078421815 +0000
+++ ./browser_apis/chrome-unstable_132.0.6811.2.json	2024-11-06 01:11:23.418485507 +0000
@@ -1,7 +1,10 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8546,
+  "browserApiCount": 8549,
   "browserApis": [
+    "AICreateMonitor",
+    "AICreateMonitor.prototype",
+    "AICreateMonitor.prototype.ondownloadprogress",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
```

  
#### 132.0.6793.2 (`2024-10-24`) ⚡
Added 8 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_132.0.6779.0_to_132.0.6793.2.diff), [json](./browser_apis/chrome-unstable_132.0.6779.0_to_132.0.6793.2.json), [full list](./browser_apis/chrome-unstable_132.0.6793.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_132.0.6779.0.json	2024-10-25 01:12:03.840027585 +0000
+++ ./browser_apis/chrome-unstable_132.0.6793.2.json	2024-10-25 01:12:30.495941532 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8538,
+  "browserApiCount": 8546,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1254,6 +1254,10 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
+    "DevicePosture",
+    "DevicePosture.prototype",
+    "DevicePosture.prototype.onchange",
+    "DevicePosture.prototype.type",
     "DocumentPictureInPicture",
     "DocumentPictureInPicture.prototype",
     "DocumentPictureInPicture.prototype.onenter",
@@ -3683,6 +3687,7 @@
     "Navigator.prototype.deprecatedRunAdAuctionEnforcesKAnonymity",
     "Navigator.prototype.deprecatedURNToURL",
     "Navigator.prototype.deviceMemory",
+    "Navigator.prototype.devicePosture",
     "Navigator.prototype.doNotTrack",
     "Navigator.prototype.geolocation",
     "Navigator.prototype.getBattery",
@@ -4741,6 +4746,9 @@
     "PublicKeyCredential.prototype.rawId",
     "PublicKeyCredential.prototype.response",
     "PublicKeyCredential.prototype.toJSON",
+    "PublicKeyCredential.signalAllAcceptedCredentials",
+    "PublicKeyCredential.signalCurrentUserDetails",
+    "PublicKeyCredential.signalUnknownCredential",
     "PushManager",
     "PushManager.prototype",
     "PushManager.prototype.getSubscription",
```

  
#### 132.0.6779.0 (`2024-10-17`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_131.0.6768.4_to_132.0.6779.0.diff), [json](./browser_apis/chrome-unstable_131.0.6768.4_to_132.0.6779.0.json), [full list](./browser_apis/chrome-unstable_132.0.6779.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_131.0.6768.4.json	2024-10-18 01:11:32.976030732 +0000
+++ ./browser_apis/chrome-unstable_132.0.6779.0.json	2024-10-18 01:12:30.664224574 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8535,
+  "browserApiCount": 8538,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1588,6 +1588,7 @@
     "GPUCanvasContext.prototype",
     "GPUCanvasContext.prototype.canvas",
     "GPUCanvasContext.prototype.configure",
+    "GPUCanvasContext.prototype.getConfiguration",
     "GPUCanvasContext.prototype.getCurrentTexture",
     "GPUCanvasContext.prototype.unconfigure",
     "GPUColorWrite",
@@ -5088,6 +5089,7 @@
     "Request.prototype.blob",
     "Request.prototype.body",
     "Request.prototype.bodyUsed",
+    "Request.prototype.bytes",
     "Request.prototype.cache",
     "Request.prototype.clone",
     "Request.prototype.credentials",
@@ -5132,6 +5134,7 @@
     "Response.prototype.blob",
     "Response.prototype.body",
     "Response.prototype.bodyUsed",
+    "Response.prototype.bytes",
     "Response.prototype.clone",
     "Response.prototype.formData",
     "Response.prototype.headers",
```

  
#### 131.0.6768.4 (`2024-10-11`) ⚡
Added 0 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_131.0.6753.0_to_131.0.6768.4.diff), [json](./browser_apis/chrome-unstable_131.0.6753.0_to_131.0.6768.4.json), [full list](./browser_apis/chrome-unstable_131.0.6768.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_131.0.6753.0.json	2024-10-12 01:09:06.825782191 +0000
+++ ./browser_apis/chrome-unstable_131.0.6768.4.json	2024-10-12 01:09:35.841720289 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8536,
+  "browserApiCount": 8535,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1560,7 +1560,6 @@
     "GPUAdapter.prototype.info",
     "GPUAdapter.prototype.isFallbackAdapter",
     "GPUAdapter.prototype.limits",
-    "GPUAdapter.prototype.requestAdapterInfo",
     "GPUAdapter.prototype.requestDevice",
     "GPUAdapterInfo",
     "GPUAdapterInfo.prototype",
```

  
#### 131.0.6753.0 (`2024-10-4`) ⚡
Added 22 APIs, removed 4 (see: [diff](./browser_apis/chrome-unstable_131.0.6738.0_to_131.0.6753.0.diff), [json](./browser_apis/chrome-unstable_131.0.6738.0_to_131.0.6753.0.json), [full list](./browser_apis/chrome-unstable_131.0.6753.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_131.0.6738.0.json	2024-10-05 01:10:09.450323647 +0000
+++ ./browser_apis/chrome-unstable_131.0.6753.0.json	2024-10-05 01:10:48.762182486 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8518,
+  "browserApiCount": 8536,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -521,6 +521,10 @@
     "CSSLayerStatementRule",
     "CSSLayerStatementRule.prototype",
     "CSSLayerStatementRule.prototype.nameList",
+    "CSSMarginRule",
+    "CSSMarginRule.prototype",
+    "CSSMarginRule.prototype.name",
+    "CSSMarginRule.prototype.style",
     "CSSMathClamp",
     "CSSMathClamp.prototype",
     "CSSMathClamp.prototype.lower",
@@ -581,14 +585,12 @@
     "CSSPositionTryDescriptors.prototype.inline-size",
     "CSSPositionTryDescriptors.prototype.inlineSize",
     "CSSPositionTryDescriptors.prototype.inset",
-    "CSSPositionTryDescriptors.prototype.inset-area",
     "CSSPositionTryDescriptors.prototype.inset-block",
     "CSSPositionTryDescriptors.prototype.inset-block-end",
     "CSSPositionTryDescriptors.prototype.inset-block-start",
     "CSSPositionTryDescriptors.prototype.inset-inline",
     "CSSPositionTryDescriptors.prototype.inset-inline-end",
     "CSSPositionTryDescriptors.prototype.inset-inline-start",
-    "CSSPositionTryDescriptors.prototype.insetArea",
     "CSSPositionTryDescriptors.prototype.insetBlock",
     "CSSPositionTryDescriptors.prototype.insetBlockEnd",
     "CSSPositionTryDescriptors.prototype.insetBlockStart",
@@ -4118,7 +4120,6 @@
     "Option.prototype.constructor.prototype.getElementsByTagName",
     "Option.prototype.constructor.prototype.getElementsByTagNameNS",
     "Option.prototype.constructor.prototype.getHTML",
-    "Option.prototype.constructor.prototype.getInnerHTML",
     "Option.prototype.constructor.prototype.hasAttribute",
     "Option.prototype.constructor.prototype.hasAttributeNS",
     "Option.prototype.constructor.prototype.hasAttributes",
@@ -6107,7 +6108,6 @@
     "ShadowRoot.prototype.getAnimations",
     "ShadowRoot.prototype.getElementById",
     "ShadowRoot.prototype.getHTML",
-    "ShadowRoot.prototype.getInnerHTML",
     "ShadowRoot.prototype.getSelection",
     "ShadowRoot.prototype.host",
     "ShadowRoot.prototype.innerHTML",
@@ -7960,14 +7960,25 @@
     "XRFrame",
     "XRFrame.prototype",
     "XRFrame.prototype.createAnchor",
+    "XRFrame.prototype.fillJointRadii",
+    "XRFrame.prototype.fillPoses",
     "XRFrame.prototype.getDepthInformation",
     "XRFrame.prototype.getHitTestResults",
     "XRFrame.prototype.getHitTestResultsForTransientInput",
+    "XRFrame.prototype.getJointPose",
     "XRFrame.prototype.getLightEstimate",
     "XRFrame.prototype.getPose",
     "XRFrame.prototype.getViewerPose",
     "XRFrame.prototype.session",
     "XRFrame.prototype.trackedAnchors",
+    "XRHand",
+    "XRHand.prototype",
+    "XRHand.prototype.entries",
+    "XRHand.prototype.forEach",
+    "XRHand.prototype.get",
+    "XRHand.prototype.keys",
+    "XRHand.prototype.size",
+    "XRHand.prototype.values",
     "XRHitTestResult",
     "XRHitTestResult.prototype",
     "XRHitTestResult.prototype.createAnchor",
@@ -7979,6 +7990,7 @@
     "XRInputSource.prototype",
     "XRInputSource.prototype.gamepad",
     "XRInputSource.prototype.gripSpace",
+    "XRInputSource.prototype.hand",
     "XRInputSource.prototype.handedness",
     "XRInputSource.prototype.profiles",
     "XRInputSource.prototype.targetRayMode",
@@ -7995,6 +8007,12 @@
     "XRInputSourcesChangeEvent.prototype.added",
     "XRInputSourcesChangeEvent.prototype.removed",
     "XRInputSourcesChangeEvent.prototype.session",
+    "XRJointPose",
+    "XRJointPose.prototype",
+    "XRJointPose.prototype.radius",
+    "XRJointSpace",
+    "XRJointSpace.prototype",
+    "XRJointSpace.prototype.jointName",
     "XRLayer",
     "XRLayer.prototype",
     "XRLightEstimate",
```

  
#### 131.0.6738.0 (`2024-9-26`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_131.0.6724.0_to_131.0.6738.0.diff), [json](./browser_apis/chrome-unstable_131.0.6724.0_to_131.0.6738.0.json), [full list](./browser_apis/chrome-unstable_131.0.6738.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_131.0.6724.0.json	2024-09-27 01:11:18.405484419 +0000
+++ ./browser_apis/chrome-unstable_131.0.6738.0.json	2024-09-27 01:12:09.269957803 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8517,
+  "browserApiCount": 8518,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -5092,6 +5092,7 @@
     "Request.prototype.clone",
     "Request.prototype.credentials",
     "Request.prototype.destination",
+    "Request.prototype.duplex",
     "Request.prototype.formData",
     "Request.prototype.headers",
     "Request.prototype.integrity",
```

  
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

  <!-- browserapis:end -->
