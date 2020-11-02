import * as yup from 'yup';
import { QueryStringParameters, Payload } from './interfaces';
import { YupShapeByInterface } from '@restlessness/core';

const queryStringParametersValidations = (): YupShapeByInterface<QueryStringParameters>  => ({});
const payloadValidations = (): YupShapeByInterface<Payload> => ({});

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
  payload: yup.object().shape(payloadValidations()).noUnknown(),
});

