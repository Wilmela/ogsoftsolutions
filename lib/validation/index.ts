import { z } from "zod";

export const newsLetterSchema = z.object({
  email: z.string().email({ message: "Email string not correct" }),
});

export type EmailFormFieldType = z.infer<typeof newsLetterSchema>;

export const pricingSchema = z.object({
  name: z
    .string()
    .min(4, { message: "name should be at least 4 characters long" }),
  healthCenter: z.string().min(4, {
    message: "Health center name should be at least 4 characters long",
  }),
  contact: z.string().min(4, {
    message: "Contact address should be at least 4 characters long",
  }),
  email: z.string().email({ message: "Format email properly" }),
  city: z
    .string()
    .min(4, { message: "City name should be at least 4 characters long" }),
  country: z
    .string()
    .min(2, { message: "Country  should be at least 3 characters long" }),
});

export type PricingType = z.infer<typeof pricingSchema>;

// export const postSchema = z.object({
//   author: z
//     .string()
//     .min(4, { message: "author should be at least 4 characters long" }),
//   photo: z.string(),

//   post: z
//     .string()
//     .min(4, { message: "post should be at least 4 characters long" }),
// });

// export type PostType = z.infer<typeof postSchema>;

export const userSchema = z.object({
  name: z
    .string()
    .min(4, { message: "author should be at least 4 characters long" }),

  email: z.string().email({ message: "Wrong email format" }),

  password: z
    .string()
    .min(4, { message: "password should be at least 6 characters long" }),
});

export type UserType = z.infer<typeof userSchema>;

export const userSignInSchema = z.object({
  email: z.string().email({ message: "Wrong email format" }),

  password: z
    .string()
    .min(4, { message: "password should be at least 6 characters long" }),
});

export type SignInType = z.infer<typeof userSchema>;

export const IntroTextSchema = z.object({
  text: z
    .string()
    .min(50, {
      message: "Introduction text should be more than 50 characters",
    })
    .max(300, {
      message: "Introduction text should not be more than 300 characters",
    }),
});
export type IntroTextField = z.infer<typeof IntroTextSchema>;

// CLIENT
export const AddClientSchema = z.object({
  logo: z.string(),

  info: z.string().max(40, {
    message: "Info text should not be more than 40 characters",
  }),
  remark: z.string().min(30, {
    message: "remark should be at least 30 characters",
  }),
});
export type ClientField = z.infer<typeof AddClientSchema>;

// BLOG POST
export const PostSchema = z.object({
  photo: z.string(),
  title: z.string(),
  subTitle: z.string(),
  author: z.string().max(25, { message: "Not more than 25 characters" }),
  category: z
    .string()
    .max(10, { message: "Character should not be more than 10" }),
  body: z.string().min(30, {
    message: "Body text should not be less than 30 characters",
  }),
});
export type PostProps = z.infer<typeof PostSchema>;

// COMMENT
export const PostCommentSchema = z.object({
  text: z.string().min(1, { message: "Comment field can not be empty." }),
  postId: z.string(),
});
export type CommentProps = z.infer<typeof PostCommentSchema>;

// TEAM
export const TeamSchema = z.object({
  photo: z.string(),
  fullName: z.string().max(30, { message: "Not more than 30 characters" }),
  position: z.string().max(50, { message: "Not more than 50 characters" }),
  detail: z.string().min(30, {
    message: "detail text should not be less than 30 characters",
  }),
});
export type TeamField = z.infer<typeof TeamSchema>;

// ISSUE
export const issueSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name should be at least 2 characters long" }),

  email: z.string().email({ message: "Format email properly" }),
  issue: z
    .string()
    .min(4, { message: "Issue should be at least 4 characters long" }),
  detail: z
    .string()
    .min(15, { message: "Detail  should be at least 15 characters long" }),
});

export type IssueType = z.infer<typeof issueSchema>;
