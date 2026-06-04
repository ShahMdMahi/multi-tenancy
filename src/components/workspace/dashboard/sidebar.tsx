import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Users,
  Settings,
  User,
  ShieldPlus,
  LogOut,
  Briefcase,
} from "lucide-react";

import { getWorkspaceLink } from "@/utils/links";

interface WorkspaceSidebarProps {
  domain?: string;
}

export function WorkspaceSidebar({ domain }: WorkspaceSidebarProps) {
  const navItems = [
    {
      title: "Workspace",
      items: [
        { title: "Dashboard", url: "/", icon: LayoutDashboard },
        { title: "Members", url: "/members", icon: Users },
        { title: "Settings", url: "/settings", icon: Settings },
      ],
    },
    {
      title: "Account",
      items: [
        { title: "Profile", url: "/profile", icon: User },
        { title: "Sessions", url: "/sessions", icon: ShieldPlus },
        { title: "Logout", url: "/logout", icon: LogOut },
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Briefcase className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-foreground">
                  Workspace
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  Team Environment
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="mx-0" />
      <SidebarContent>
        {navItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      render={<Link href={getWorkspaceLink(item.url, domain)} />}
                    >
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarSeparator className="mx-0" />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="rounded-lg bg-primary/10 text-primary">
                  US
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Workspace User</span>
                <span className="truncate text-xs text-muted-foreground">
                  user@workspace.com
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
