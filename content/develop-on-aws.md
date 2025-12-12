---
title: "Developing on AWS"
date: 2025-12-12
description: "How to use AWS services to build your application"
---

Last month I attended a instructor-lead training from AWS called "Developing on AWS". The content is really great and lots of hands-on labs that I have learned a lot.

## Configure Development Environment

There are many ways to configure development environment: aws configure, aws login, manually enter access key etc. The goal is to be able to provision AWS services using CLI. One thing to remember is behind the scenes AWS console is calling CLI/SDK to do everything. So you don't have to use console to manage AWS resources.

```
aws --version
aws s3 ls
aws s3 rb s3://$bucketToDelete
```

## S3

Low-level API
```
s3client = boto3.client('s3')
```
High-level API
```
s3resource = boto3.resource('s3')
```
We normally use boto3.client which is low-level API
- s3Client.create_bucket
- s3Client.get_waiter('bucket_exists')
- s3Client.upload_file
- s3Client.download_fileobj
- s3Client.put_object
- s3Client.put_bucket_website

A presigned URL is perfect for giving temporary, secure access to a S3 object without making the bucket public. Here's how it works:
1. You generate a URL that includes a signature and expiration time.
2. Anyone with the URL can access the object (read or write, depending on teh method) until it expires.
3. The bucket and object remain private; no public ACL or bucket policy is needed.

## DynamoDB

- ddbClient.create_table
- ddbClient.query
- ddbClient.update_item

It makes more sense to create table in AWS console or use database migration as you usually just create it once, it can be done via boto3 client of course.

Global Secondary Index vs Local Secondary Index

Eventual consistency vs Strong consistency, eventual consistency costs 0.5 RCU as it uses less resources but can get stale data.

## Lambda

Lambda is super useful, it sits behind API Gateway for all the applications we build. It's serverless, automatically scale to up to 1000 instances and can even increase, use layers to reduce duplication, save in /tmp folder to improve performance.

Upload Lambda via zip file or container, zip file is the easier method.

```
aws lambda update-function-code --function-name dictate-function --zip-file fileb://dictate-function.zip
```

## API Gateway

It creates a http endpoint (e.g. REST) to integrate with Lambda.

To create a route we need to create resources, method, we can use mapping templates to map response or request, we can do model validation, enable CORS, and test it before we deploy API.