# AWS Deployment Architecture

```mermaid
flowchart LR

A[User Browser] --> B[Route53]

B --> C[CloudFront CDN]

C --> D[S3 Static Website]

C --> E[API Gateway]

E --> F[AWS Lambda]

F --> G[DynamoDB]

F --> H[SNS Notifications]

F --> I[Payment Gateway]

J[Admin Panel] --> E
```

---

# Deployment Components

| Component | AWS Service |
|---|---|
| Website Hosting | S3 |
| CDN | CloudFront |
| DNS | Route53 |
| APIs | API Gateway |
| Compute | Lambda |
| Database | DynamoDB |
| Notifications | SNS |
| Security | IAM + WAF |

---

# Deployment Steps

1. Create S3 Bucket
2. Enable Static Hosting
3. Configure CloudFront
4. Deploy Backend APIs
5. Configure Domain
6. Enable SSL
7. Setup Monitoring
