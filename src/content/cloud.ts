export interface CloudProject {
  slug: string;
  title: string;
  summary: string;
  services: string[];
  image: string;
  href?: string;
}

export interface CloudTrack {
  title: string;
  projects: CloudProject[];
}

export const cloudProvider = "NextWork";

export const cloudTracks: CloudTrack[] = [
  {
    title: "AWS Foundations",
    projects: [
      {
        slug: "ec2-first-server",
        title: "Launch a Cloud Server on AWS",
        summary: "Provisioned and connected to an EC2 instance from scratch.",
        services: ["EC2"],
        image: "/cloud/ec2-first-server.jpg",
      },
      {
        slug: "s3-static-website",
        title: "Host a Website on Amazon S3",
        summary: "Deployed a static website from an S3 bucket with public access configured.",
        services: ["S3"],
        image: "/cloud/s3-static-website.jpg",
      },
      {
        slug: "iam-cloud-security",
        title: "Cloud Security with AWS IAM",
        summary: "Locked down resources with IAM users, groups, and least-privilege policies.",
        services: ["IAM", "EC2"],
        image: "/cloud/iam-cloud-security.jpg",
      },
      {
        slug: "vpc",
        title: "Build a Virtual Private Cloud",
        summary: "Designed a VPC with subnets, route tables, and an internet gateway.",
        services: ["VPC"],
        image: "/cloud/vpc.jpg",
      },
    ],
  },
  {
    title: "Amazon Lex Chatbot Series",
    projects: [
      {
        slug: "lex-series-intro",
        title: "Welcome to the Lex Chatbot Series",
        summary: "Kicked off a multi-part build of a conversational banking bot.",
        services: ["Lex"],
        image: "/cloud/lex-series-intro.jpg",
      },
      {
        slug: "lex-build-chatbot",
        title: "Build a Chatbot with Amazon Lex",
        summary: "Created a Lex bot with intents, utterances, and fallback handling.",
        services: ["Lex"],
        image: "/cloud/lex-build-chatbot.jpg",
      },
      {
        slug: "lex-custom-slots",
        title: "Add Custom Slots to a Lex Chatbot",
        summary: "Defined custom slot types so the bot captures domain-specific values.",
        services: ["Lex"],
        image: "/cloud/lex-custom-slots.jpg",
      },
      {
        slug: "lex-lambda",
        title: "Connect Amazon Lex with Lambda",
        summary: "Wired a Lambda function into fulfillment to return dynamic responses.",
        services: ["Lex", "Lambda"],
        image: "/cloud/lex-lambda.jpg",
      },
      {
        slug: "lex-save-user-info",
        title: "Save User Info with a Lex Chatbot",
        summary: "Carried user details across intents using session context.",
        services: ["Lex", "Lambda"],
        image: "/cloud/lex-save-user-info.jpg",
      },
      {
        slug: "lex-multiple-slots",
        title: "Set Up Multiple Slots in a Lex Chatbot",
        summary: "Collected several slot values in one intent to complete multi-step requests.",
        services: ["Lex", "Lambda"],
        image: "/cloud/lex-multiple-slots.jpg",
      },
    ],
  },
];
