import { S3Client } from "@aws-sdk/client-s3"

export const s3 = new S3Client({
    region:process.env.FILEBASE_REGION,
    endpoint:"https://s3.filebase.io",
    credentials:{
        accessKeyId:process.env.FILEBASE_ACCESS_KEY_ID,
        secretAccessKey:process.env.FILEBASE_SECRET_KEY
    }
})