import AWS from "aws-sdk"
import uuidv4 from "uuid/v4"
import { addSeconds } from "date-fns"

import { getItem, scanItems } from "./dynamodb"
