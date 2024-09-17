// "use client";
import { IDepartment } from "@/interfaces";
import { Avatar, Badge, Table, Group, Text, Anchor } from "@mantine/core";
import Link from "next/link";
import { useMemo } from "react";

const jobColors: Record<string, string> = {
  engineer: "blue",
  manager: "cyan",
  designer: "pink",
};

interface UsersTableProps {
  department: IDepartment;
}

export default function UsersTable({ department }: UsersTableProps) {
  const coordinators = useMemo(
    () =>
      department.coordinators.length <= 0
        ? []
        : department.coordinators.map(
            ({ id, username, profile, email, contact, course, role }) => ({
              id,
              avatar: profile.photo.url,
              name: username,
              job: course.name,
              email: email,
              role,
              phone: contact,
            })
          ),
    [department]
  );

  if (coordinators.length <= 0)
    return (
      <p className="font-bold">
        Não existe nenhum cordenador neste departamento.
      </p>
    );
  console.log("department", department);
  const rows = coordinators.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Group gap="sm">
          <Link href={`/profile/${item.id}/${item.role}`}>
            <Avatar size={30} src={item.avatar} radius={30} />
          </Link>
          <Link href={`/profile/${item.id}/${item.role}`}>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
          </Link>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge color={jobColors[item.job.toLowerCase()]} variant="light">
          {item.job}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {item.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.phone}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Cordenadores</Table.Th>
            <Table.Th>Courso</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Telefone</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
