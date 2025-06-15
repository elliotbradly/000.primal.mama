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
      Pixel Test
    </Container>
  );
}
