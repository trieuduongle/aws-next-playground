export const environment = {
  aws: {
    auth: {
      identityPoolId: process.env['NEXT_PUBLIC_AWS_IDENTITY_POOL_ID'],
      identityPoolRegion: process.env['NEXT_PUBLIC_AWS_IDENTITY_POOL_REGION'],
      userPoolId: process.env['NEXT_PUBLIC_AWS_USER_POOL_ID'],
      userPoolWebClientId:
        process.env['NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID'],
    },
    s3: {
      bucketName: process.env['NEXT_PUBLIC_AWS_S3_BUCKET_NAME'],
      region: process.env['NEXT_PUBLIC_AWS_S3_REGION'],
    },
  },
};
