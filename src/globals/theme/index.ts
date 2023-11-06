enum Padding {
  p1 = '2px',
  p2 = '4px',
  p3 = '8px',
  p4 = '12px',
  p5 = '16px',
  p6 = '22px',
  p7 = '28px',
  p8 = '32px'
}

enum Border {
  b0 = '0px',
  b1 = '1px',
  b2 = '5px'
}

enum BorderRadius {
  b0 = '0px',
  b1 = '5px',
  b2 = '10px'
}

export default {
  colors: {
    white: '#ffffff'
  },
  padding: {
    p1: Padding.p1,
    p2: Padding.p2,
    p3: Padding.p3,
    p4: Padding.p4,
    p5: Padding.p5,
    p6: Padding.p6,
    p7: Padding.p7,
    p8: Padding.p8,
    page: '20px'
  },
  border: {
    b0: Border.b0,
    b1: Border.b1,
    b2: Border.b2
  }
}

