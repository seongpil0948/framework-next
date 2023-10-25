// "use client";
// import React, {
//   ErrorInfo,
//   useCallback,
//   useEffect,
//   useState,
//   ReactElement,
// } from "react";
// import { ErrorBoundary } from "../../utils/exceptions";
// import { Code } from "@nextui-org/code";
// import { useBreakpoint } from "use-breakpoint";
// import { BREAK_POINTS } from "@/config/common";

// export interface PlayerProps {
//   sources: {
//     src: string;
//     type: string;
//   }[];
//   controls?: boolean;
// }
// export function VideoPlayer(props: PlayerProps) {
//   const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
//   const onVideo = useCallback((el: HTMLVideoElement) => {
//     setVideoEl(el);
//   }, []);
//   const { breakpoint } = useBreakpoint(BREAK_POINTS);

//   useEffect(() => {
//     if (videoEl == null) {
//       return;
//     }

//     return () => {};
//   }, [props, videoEl]);

//   return (
//     <ErrorBoundary fallback={VideoFallback} onError={onVideoError}>
//       <a
//         className="block relative overflow-hidden h-0 bg-black"
//         style={{ paddingBottom: "55%" }}
//       >
//         <div className="block">
//           <video
//             ref={onVideo}
//             className="video inline-block absolute top-0 left-0 z-10 w-full max-h-full"
//             controls={props.controls}
//           >
//             {refineSources(props.sources).map((item, index) => (
//               <source key={index} src={item.src} type={item.type} />
//             ))}
//             this browser not supported video tag
//           </video>
//         </div>
//       </a>
//     </ErrorBoundary>
//   );
// }
// /*

// MIME 유형: video/mp4
// 일반적으로 H.264 비디오 코덱과 AAC 오디오 코덱을 사용합니다.
// WebM

// MIME 유형: video/webm
// 일반적으로 VP9 비디오 코덱과 Opus 오디오 코덱을 사용합니다.
// Ogg

// MIME 유형: video/ogg
// 일반적으로 Theora 비디오 코덱과 Vorbis 오디오 코덱을 사용합니다.
// 3GPP (3rd Generation Partnership Project)

// MIME 유형: video/3gpp 또는 video/3gp
// 주로 모바일 장치에서 사용되며, H.264 비디오와 AMR 오디오 코덱을 사용합니다.
// AVI (Audio Video Interleave)

// MIME 유형: video/x-msvideo 또는 video/avi
// 일반적으로 DivX 또는 Xvid 비디오 코덱과 MP3 오디오 코덱을 사용합니다.
// QuickTime

// MIME 유형: video/quicktime 또는 video/mp4
// 일반적으로 H.264 비디오 코덱과 AAC 오디오 코덱을 사용합니다.
//   */
// const Mapper: {
//   [k: string]: string[];
// } = {
//   "video/x-matroska": ["video/avi", "video/webm", "video/mp4"],
//   "video/quicktime": ["video/quicktime", "video/mp4"],
// };
// const refineSources = (
//   sources: PlayerProps["sources"]
// ): PlayerProps["sources"] => {
//   const src: PlayerProps["sources"] = [];
//   sources.forEach((item) => {
//     if (Mapper[item.type]) {
//       Mapper[item.type].forEach((type) => {
//         src.push({
//           ...item,
//           type,
//         });
//       });
//     } else {
//       src.push(item);
//     }
//   });
//   return src;
// };
// function VideoFallback(error?: Error, errorInfo?: ErrorInfo) {
//   const bodyComp = [] as ReactElement[];
//   if (error) {
//     bodyComp.push(<Code color="danger">{error.message}</Code>);
//   }
//   if (errorInfo) {
//     bodyComp.push(<Code color="default">{errorInfo.componentStack}</Code>);
//   }
//   return <> {bodyComp.map((item, index) => item)} </>;
// }
// function onVideoError(error: Error, errorInfo: ErrorInfo) {
//   console.error("onVideoError", error, errorInfo);
// }
