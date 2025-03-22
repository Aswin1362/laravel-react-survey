import React from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/contextProvider";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const Surveys = () => {
  const { surveys } = useStateContext();

  const onDeleteClick = () => {
    console.log("On delete click");
  };

  return (
    <PageComponent
      title="Surveys"
      buttons={
        <TButton to="/surveys/create" color="green">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create new
        </TButton>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {surveys.map((survey) => (
          <SurveyListItem
            survey={survey}
            key={survey.id}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </PageComponent>
  );
};

export default Surveys;
