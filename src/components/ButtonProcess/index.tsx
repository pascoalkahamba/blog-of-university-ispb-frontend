"use client";
import { useEffect, useState } from "react";
import { useInterval } from "@mantine/hooks";
import { Button, Progress, useMantineTheme, rgba } from "@mantine/core";
import classes from "@/components/ButtonProcess/styles.module.css";
import { useAtom } from "jotai";
import { dropzoneAtom, selectFileAtom } from "@/storage/atom";
import { DropzoneFile } from "../DropzoneFile";

interface ButtonProgressProps {
  targetButton: string;
  className?: string;
}

export function ButtonProgress({
  targetButton,
  className,
}: ButtonProgressProps) {
  const theme = useMantineTheme();
  const [progress, setProgress] = useState(0);
  const [dropzone, setDropzone] = useAtom(dropzoneAtom);
  const [selectFile, setSelectFile] = useAtom(selectFileAtom);

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        return 0;
      }),
    20
  );

  useEffect(() => {
    if (progress === 100) interval.stop();
    dropzone && selectFile
      ? false
      : !interval.active && selectFile && interval.start();

    () => {
      interval.stop();
    };
  }, [selectFile, dropzone, progress]);

  function chooseFile() {
    setDropzone(true);
    setSelectFile("");
  }
  return (
    <section className={className}>
      <Button
        className={classes.button}
        onClick={chooseFile}
        color={
          selectFile && progress === 100
            ? "teal"
            : !selectFile && progress === 100
            ? theme.colors.red[6]
            : theme.primaryColor
        }
      >
        <div className={classes.label}>
          {progress !== 0 && progress !== 100
            ? "Carregando imagem"
            : selectFile
            ? "Imagem carregada"
            : targetButton}
        </div>
        {progress !== 0 && (
          <Progress
            value={progress}
            className={classes.progress}
            color={rgba(theme.colors.blue[2], 0.35)}
            radius="sm"
          />
        )}
      </Button>
      {dropzone && <DropzoneFile />}
    </section>
  );
}
