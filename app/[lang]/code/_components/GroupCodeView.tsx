"use client";

import { fetcherJson } from "@/app/_utils/fetch";
import { useState } from "react";
import useSWR from "swr";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { Pagination } from "@nextui-org/pagination";
import { Spinner } from "@nextui-org/spinner";

function Page(props: { index: number; setPage?: (i: number) => void }) {
  const { index, setPage } = props;
  const { data, isLoading } = useSWR<any>(
    `/dsi/api/code-groups?currentPage=${index}`,
    fetcherJson,
    {
      keepPreviousData: true,
    }
  );
  console.log("data: ", data);
  if (!data) return <div>Loading...</div>;
  const { totalPage, data: bodyData, currentPage } = data.body;
  const loadingState = isLoading || bodyData.length === 0 ? "loading" : "idle";

  return (
    <Table
      aria-label="Example table with client async pagination"
      bottomContent={
        totalPage > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={currentPage}
              total={totalPage}
              onChange={(page) => setPage && setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="codeGroupId">그룹코드ID</TableColumn>
        <TableColumn key="codeGroup">codeGroup</TableColumn>
        <TableColumn key="codeGroupName">codeGroupName</TableColumn>
        <TableColumn key="codeGroupDescription">
          codeGroupDescription
        </TableColumn>
      </TableHeader>
      <TableBody
        items={bodyData ?? []}
        loadingContent={<Spinner />}
        loadingState={loadingState}
      >
        {(item: any) => (
          <TableRow key={item?.codeGroupId}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default function App() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <Page index={pageIndex} setPage={(newPage) => setPageIndex(newPage)} />
      <div style={{ display: "none" }}>
        <Page index={pageIndex + 1} />
      </div>
    </div>
  );
}
