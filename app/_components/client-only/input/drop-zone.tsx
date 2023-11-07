import { useDropzone, DropzoneOptions } from 'react-dropzone'

export function PDropZone({
  dropZoneProps,
}: {
  dropZoneProps: DropzoneOptions
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone(dropZoneProps)

  return (
    <div {...getRootProps()}>
      <input
        className="text-default-500 text-sm"
        {...getInputProps({
          accept: dropZoneProps.accept
            ? Object.keys(dropZoneProps.accept).join(',')
            : undefined,
        })}
      />

      {isDragAccept && (
        <p className="text-center">All files will be accepted</p>
      )}
      {isDragReject && (
        <p className="text-center">Some files will be rejected</p>
      )}
      {!isDragActive && <p className="text-center">Drop some files here ...</p>}
    </div>
  )
}
