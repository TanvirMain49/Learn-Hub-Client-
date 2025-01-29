import React from "react";
import useSessionCard from "../../../Hooks/useSessionCard";
import RenderTable from "./RenderTable";
import DasHeading from "../../../Shared/DashBoardHeading";

const AllSessionAdmin = () => {
  const { card, refetch } = useSessionCard();
  const pendingCard = card.filter(item=>item.status === "pending")
  const successCard = card.filter(item=>item.status === "success")
  const rejectedCard = card.filter(item=>item.status === "rejected")
  console.log(successCard);
  return (
    <>
    <DasHeading Heading="Mange All Session" subHeading="pending success reject"></DasHeading>
    <div className="md:px-16 space-y-20">
        <RenderTable cards={pendingCard} status="pending" refetch={refetch}></RenderTable>
        <RenderTable cards={successCard} status="success" refetch={refetch}></RenderTable>
        <RenderTable cards={rejectedCard} status="rejected" refetch={refetch}></RenderTable>
    </div>
    </>
  );
};

export default AllSessionAdmin;
