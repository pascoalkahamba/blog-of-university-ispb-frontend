import { Menu, Group, ActionIcon, rem, useMantineTheme } from "@mantine/core";
import { IconPencilMinus, IconGripVertical } from "@tabler/icons-react";
import classes from "@/components/SplitButton/styles.module.css";
import ModalDemoDelete from "@/components/ModalDemoDelete";
import { useDeleteCommentOrReply } from "@/hooks/useDeleteCommentOrReply";
import { deleteComment, deleteReply, editComment } from "@/server";
import { notifications } from "@mantine/notifications";
import { useAtom, useSetAtom } from "jotai";
import { commentAtom, editAtom, replyAtom } from "@/storage/atom";
import { useUpdatePost } from "@/hooks/useUpdatePost";
import { TEventType } from "@/@types";

interface SplitButtonProps {
  trashTarget: string;
  editTarget: string;
  editType: TEventType;
  commentId: number | null;
  replyId: number | null;
  content: string;
}

export function SplitButton({
  trashTarget,
  editTarget,
  content,
  editType,
  replyId,
  commentId,
}: SplitButtonProps) {
  const theme = useMantineTheme();
  const { mutation } = useDeleteCommentOrReply(
    deleteComment,
    showNotificationOnSuccess,
    showNotificationOnError
  );
  const { mutation: mutationDeleteReply } = useDeleteCommentOrReply(
    deleteReply,
    showNotificationOnSuccess,
    showNotificationOnError
  );
  const setComment = useSetAtom(commentAtom);
  const setReply = useSetAtom(replyAtom);
  const setEdit = useSetAtom(editAtom);

  function handleEdit() {
    if (commentId && editType === "comment") {
      setComment({ id: commentId, content });
      setEdit({ type: "comment", status: true });
      return;
    }
    if (replyId && editType === "reply") {
      setReply({ id: replyId, content });
      setEdit({ type: "reply", status: true });
      return;
    }
  }

  function showNotificationOnSuccess() {
    notifications.show({
      title: `Eliminar ${commentId ? "comentário" : "resposta"}`,
      message: `${
        commentId ? "Comentário" : "Resposta"
      } eliminado com sucesso.`,
      position: "top-right",
      color: "blue",
    });
  }

  function showNotificationOnError() {
    notifications.show({
      title: `Eliminar ${commentId ? "comentário" : "resposta"}`,
      message: `${
        commentId ? "Comentário" : "Resposta"
      } "não eliminado algo deu errado tente novamente."`,
      position: "top-right",
      color: "red",
    });
  }

  function handleDelete() {
    if (commentId && editType === "comment") {
      console.log("commentId", commentId);
      mutation.mutate(commentId);
    }

    if (replyId && editType === "reply") {
      mutationDeleteReply.mutate(replyId);
    }
  }

  return (
    <Group wrap="nowrap" gap={0} className="w-[15%]">
      <Menu
        transitionProps={{ transition: "pop" }}
        position="bottom-end"
        withinPortal
      >
        <Menu.Target>
          <ActionIcon
            color={theme.primaryColor}
            size={36}
            className={`${classes.menuControl} bg-transparent hover:bg-slate-800`}
          >
            <IconGripVertical
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            onClick={handleEdit}
            leftSection={
              <IconPencilMinus
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
                color={theme.colors.yellow[5]}
              />
            }
          >
            {editTarget}
          </Menu.Item>
          <ModalDemoDelete
            editOnHeader={false}
            isThisUserCanDelete={false}
            content={`Tem certeza que desejas eliminar ${
              commentId ? "este comentário" : "esta resposta"
            } está acção irá eliminar permanente ${
              commentId ? "o comentário" : "a resposta"
            } da Vitrine online.`}
            trashTarget={trashTarget}
            handleClick={handleDelete}
            typeModal="deleteComment"
          />
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
