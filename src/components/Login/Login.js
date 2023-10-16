export default function Login() {
  return (
    <Card>
      <Flex>
        <Text>ID</Text>
        <Input placeholder="아이디를 입력하세요." />
      </Flex>
      <Flex>
        <Text>PW</Text>
        <Input placeholder="비밀번호를 입력하세요." />
      </Flex>
    </Card>
  );
}
