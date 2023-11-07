import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardProps,
} from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'

export function CardBasic(props: {
  title?: React.ReactNode
  body: React.ReactNode
  footer?: React.ReactNode
  cardProps?: CardProps
}) {
  return (
    <Card className="max-w-[400px]" {...props.cardProps}>
      {props.title && (
        <>
          <Divider />
          <CardHeader>{props.title}</CardHeader>
        </>
      )}
      <CardBody>{props.body}</CardBody>
      {props.footer && (
        <>
          <Divider />
          <CardFooter>{props.footer}</CardFooter>
        </>
      )}
    </Card>
  )
}

// import { VideoPlayer, PlayerProps } from "@/app/components/video";
// import { useBreakpoint } from "use-breakpoint";
// import { BREAK_POINTS } from "@/config/common";
// import { IPost } from "@/app/[lang]/post/types";
// import { ChipList } from "./list";
// import { useRouter } from "next/navigation";
// import { PostDotPopover } from "../[lang]/post/components/pop-over";
// import { IUser } from "../[lang]/user";
// import { AvatarUser } from "../[lang]/user/components/avatars";

// export const CardVideo = (props: {
//   playerProps: PlayerProps;
//   cardProps: CardProps;
//   post: IPost;
//   writer?: IUser;
// }) => {
//   const { playerProps, post } = props;
//   const { breakpoint } = useBreakpoint(BREAK_POINTS);
//   const router = useRouter();
//   return (
//     <Card {...props.cardProps} isFooterBlurred className="border-none">
//       <CardBody
//         onClick={() => {
//           router.push(`/post/${post.id}`);
//         }}
//         className="p-0"
//       >
//         <VideoPlayer {...playerProps} controls />
//       </CardBody>
//       <CardFooter>
//         {props.writer && <AvatarUser user={props.writer} />}
//         <div className=" ml-3 flex flex-col ">
//           <h4 className="font-medium text-medium text-start">{post.title}</h4>
//           <ChipList tags={post.tags} />
//           {/* <small className="text-default-500">12 Tracks</small>
//         <small className="text-tiny text-white bg-black/20">

//         </small> */}
//         </div>
//         <PostDotPopover post={post} />
//       </CardFooter>
//     </Card>
//   );
// };

// // export const CardDropZone = (props: {
// //   body?: ReactNode;
// //   footer?: ReactNode;
// //   header?: ReactNode;
// // }) => {
// //   const onDrop = useCallback((acceptedFiles: File[]) => {
// //     console.info("acceptedFiles: ", acceptedFiles);
// //     // Do something with the files
// //   }, []);
// //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
// //   const CardBodyInner = () =>
// //     props.body || <p> Drag n drop some files here, or click to select files</p>;

// //   return (
// //     <Card shadow="sm" radius="lg" isPressable>
// //       <CardHeader className="flex justify-between">{props.header}</CardHeader>
// //       <CardBody className="overflow-auto p-0">
// //         <div {...getRootProps()}>
// //           <input {...getInputProps()} />
// //           {isDragActive ? <p>Drop the files here ...</p> : <CardBodyInner />}
// //         </div>
// //       </CardBody>
// //       <Divider />
// //       <CardFooter className="text-small flex gap-4 items-center">
// //         {props.footer}
// //       </CardFooter>
// //     </Card>
// //   );
// // };
