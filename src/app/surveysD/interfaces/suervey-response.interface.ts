export interface SurveyResponse {
  surveyId:          number;
  surveyGuid:        string;
  surveyName:        string;
  surveyDescription: string;
  createBy:          string;
  createdDate:       Date;
  status:            boolean;
  updatedBy:         null;
  updatedDate:       Date;
}
