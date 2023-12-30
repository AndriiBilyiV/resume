import { styled } from 'styled-components';

const SvgFill = styled.svg`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 60px;
  height: 60px;

  path#circle {
    fill: ${p => p.theme.colors.dark};
  }

  path#shadow {
    fill: ${p => p.theme.colors.darkest};
  }

  polygon#leftHalf {
    fill: #ffffff;
  }

  polygon#rightHalf {
    fill: #e8e6e6;
  }

  rect#background {
    fill: ${p => p.theme.colors.dark};
  }

  g path#P,
  path#D,
  path#F {
    fill: #ffffff;
  }

  transform: scale(1);
  transition: transform 200ms cubic-bezier(0.79, 0.63, 0.54, 1.28);

  &:hover {
    transform: scale(1.2);
    transition: transform 200ms cubic-bezier(0.79, 0.63, 0.54, 1.28);

    path#circle {
      fill: #c30b15;
    }

    path#shadow {
      fill: #85080e;
    }

    rect#background {
      fill: #fc0f1a;
    }
  }
`;

const Svg = () => {
  return (
    <SvgFill
      version="1.1"
      id="Layer_1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      {/* коло */}
      <path
        id="circle"
        d="M511.344,274.266C511.77,268.231,512,262.143,512,256C512,114.615,397.385,0,256,0S0,114.615,0,256c0,117.769,79.53,216.949,187.809,246.801L511.344,274.266z"
      />
      {/* коло в тіні */}
      <path
        id="shadow"
        d="M511.344,274.266L314.991,77.913L119.096,434.087l68.714,68.714C209.522,508.787,232.385,512,256,512C391.243,512,501.976,407.125,511.344,274.266z"
      />
      {/* ліва половина листа */}
      <polygon
        id="leftHalf"
        points="278.328,333.913 255.711,77.913 119.096,77.913 119.096,311.652 "
      />
      {/* права половина листа */}
      <polygon
        id="rightHalf"
        points="392.904,311.652 392.904,155.826 337.252,133.565 314.991,77.913 255.711,77.913 256.067,333.913 "
      />
      {/* ліва половина листа */}
      <polygon
        id="leftHalf"
        points="314.991,155.826 314.991,77.913 392.904,155.826 "
      />
      {/* фон за написом */}
      <rect
        id="background"
        x="119.096"
        y="311.652"
        width="273.809"
        height="122.435"
      />
      {/* напис */}
      <g>
        <path
          id="P"
          d="M204.871,346.387c13.547,0,21.341,6.659,21.341,18.465c0,12.412-7.795,19.601-21.341,19.601h-9.611 v14.909h-13.471v-52.975L204.871,346.387L204.871,346.387z M195.26,373.858h8.93c5.904,0,9.308-2.952,9.308-8.552 c0-5.525-3.406-8.324-9.308-8.324h-8.93V373.858z"
        />
        <path
          id="D"
          d="M257.928,346.387c16.649,0,28.152,10.746,28.152,26.487c0,15.666-11.655,26.488-28.683,26.488 h-22.25v-52.975H257.928z M248.619,388.615h9.611c8.249,0,14.151-6.357,14.151-15.665c0-9.384-6.205-15.817-14.757-15.817h-9.006 V388.615z"
        />
        <path
          id="F"
          d="M308.563,356.982v12.26h23.763v10.596h-23.763v19.525h-13.471v-52.975h39.277v10.595h-25.806 V356.982z"
        />
      </g>
    </SvgFill>
  );
};

const dowload = () => {};

export const DownloadPDF = () => {
  return (
    <button onClick={() => dowload()}>
      <Svg />
    </button>
  );
};
