# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
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

  
### chrome-unstable
  
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

  <!-- browserapis:end -->
