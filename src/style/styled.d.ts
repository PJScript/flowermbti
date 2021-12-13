import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    margin:{
      ssm: string;
      sm: string;
      md: string;
      lg: string;
      xlg: string;
      xxlg: string;
    },
    fontSize:{
      sm: string;
      md: string;
      lg: string;
      xlg: string;
      xxlg: string;
    },
    colors: {
      selectBtn: string;
      green: string;
      blue: string;
    };
  }
}