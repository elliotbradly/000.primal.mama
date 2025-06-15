import React from 'react'

import { Button } from '@mantine/core';
import { Box, Title, Text, Stack, Container } from '@mantine/core';


export default function ContentsPage() {


  var act00 = () => {
    document.location.href = './shade/surface-test'
  }

  var act01 = () => {
    document.location.href = './solid/open-babylon'
  }



  return (
    <Container size="md" p={0} style={{ backgroundColor: '#ab9d77', minHeight: '100vh', color: '#000' }}>
      <Box p={40}>
        <Title order={1} style={{ fontSize: 72, fontWeight: 300, marginBottom: 40 }}>
          PIXEL TEST
        </Title>

        
        <Stack >

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Button fullWidth variant="outline" color="black" onClick={act00} > OPEN PIXEL TEST </Button>
          </Box>


          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
          <Button fullWidth variant="outline" color="black" onClick={act01} > OPEN BABYLON TEST </Button>
          </Box>


          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> LIBRARY Online </Text>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> LIBRARY </Text>
          </Box>


          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> PIXEL Online </Text>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> PIXEL </Text>
          </Box>


          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> Earth Init Test </Text>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> EARTH </Text>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> Earth Open Test </Text>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> EARTH </Text>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> Earth Update Test </Text>
            <Text style={{ fontSize: 18, fontWeight: 400 }}> EARTH </Text>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Button fullWidth variant="outline" color="black" > OPEN KITCHEN </Button>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #000' }}>
            <Button fullWidth variant="outline" color="black" > CLOSE KITCHEN </Button>
          </Box>




        </Stack>

      </Box>
    </Container>
  );
}
