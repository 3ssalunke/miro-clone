"use client";

import {
  DropdownMenuContentProps,
  DropdownMenuItem,
  DropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { ConfirmModal } from "./confirm-modal";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionsProps {
  children: React.ReactNode;
  id: string;
  title: string;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
}

export const Actions = ({
  children,
  id,
  title,
  side,
  sideOffset,
}: ActionsProps) => {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board deleted"))
      .catch(() => toast.error("Failed to delete board"));
  };

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent side={side} sideOffset={sideOffset} className="w-60">
        <DropdownMenuItem onClick={onCopyLink} className="p-3 cursor-pointer">
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="p-3 cursor-pointer"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete board?"
          description="This will delete the board and all its contents"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
