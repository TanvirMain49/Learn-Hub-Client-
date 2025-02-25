import React from "react";
import useSessionCard from "../../../Hooks/useSessionCard";
import RenderTable from "./RenderTable";
import DasHeading from "../../../Shared/DashBoardHeading";
import useSessionAdmin from "../../../Hooks/useSessionAdmin";

const AllSessionAdmin = () => {
  const { cardAdmin, refetch } = useSessionAdmin();
  const pendingCard = cardAdmin.filter(item=>item.status === "pending")
  const successCard = cardAdmin.filter(item=>item.status === "success")
  const rejectedCard = cardAdmin.filter(item=>item.status === "rejected")
  return (
    <div className="md:w-full w-[442px]">
    <DasHeading Heading="Mange All Session" subHeading="pending success reject"></DasHeading>
    <div className="md:px-16 space-y-20">
        <RenderTable cards={pendingCard} status="pending" refetch={refetch}></RenderTable>
        <RenderTable cards={successCard} status="success" refetch={refetch}></RenderTable>
        <RenderTable cards={rejectedCard} status="rejected" refetch={refetch}></RenderTable>
    </div>
    </div>
  );
};

export default AllSessionAdmin;
