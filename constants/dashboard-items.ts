import { Pen, ShieldHalf, UserPlus2, PenSquare, Bug, BookUser, Users, Newspaper} from "lucide-react";

export const DASHBOARD_NAVS = [
  {
    title: "Add Intro Text",
    Icon: Pen,
    value: "add_intro" as const,
  },
  {
    title: "Add Client",
    Icon: UserPlus2,
    value: "add_client" as const,
  },
  {
    title: "Create Post",
    Icon: PenSquare,
    value: "create-post" as const,
  },
  {
    title: "Add Member",
    Icon: ShieldHalf,
    value: "add_member" as const,
  },
  {
    title: "Fix Issues",
    Icon: Bug,
    value: "fix_issue" as const,
  },
  {
    title: "All Clients",
    Icon: BookUser,
    value: "all_clients" as const,
  },
  {
    title: "All Users",
    Icon: Users,
    value: "all_users" as const,
  },
  {
    title: "Subscribed Emails",
    Icon: Newspaper,
    value: "newsLetter" as const,
  },
];
