import { SvgIcon } from "@mui/material";
import { CustomSvgIconProps } from "@/ui/shared/types/icons";

export const GoogleDriveDocumentsIcon = (props: CustomSvgIconProps) => {
  return (
    <SvgIcon {...props} inheritViewBox>
      {/* From https://www.svgrepo.com/ */}
      <svg height="800px" width="800px" viewBox="0 0 512 512">
        <path
          fill="#167EE6"
          d="M439.652,512H72.348c-9.217,0-16.696-7.479-16.696-16.696V16.696C55.652,7.479,63.131,0,72.348,0  h233.739c4.424,0,8.674,1.761,11.804,4.892l133.565,133.565c3.131,3.13,4.892,7.379,4.892,11.804v345.043  C456.348,504.521,448.869,512,439.652,512z"
        />
        <path
          fill="#2860CC"
          d="M317.891,4.892C314.761,1.761,310.511,0,306.087,0H256v512h183.652  c9.217,0,16.696-7.479,16.696-16.696V150.261c0-4.424-1.761-8.674-4.892-11.804L317.891,4.892z"
        />
        <path
          fill="#167EE6"
          d="M451.459,138.459L317.891,4.892C314.76,1.76,310.511,0,306.082,0h-16.691l0.001,150.261  c0,9.22,7.475,16.696,16.696,16.696h150.26v-16.696C456.348,145.834,454.589,141.589,451.459,138.459z"
        />
        <path
          fill="#FFFFFF"
          d="M272.696,411.826H139.13c-9.217,0-16.696-7.479-16.696-16.696c0-9.217,7.479-16.696,16.696-16.696  h133.565c9.217,0,16.696,7.479,16.696,16.696C289.391,404.348,281.913,411.826,272.696,411.826z"
        />
        <path
          fill="#E6F3FF"
          d="M272.696,378.435H256v33.391h16.696c9.217,0,16.696-7.479,16.696-16.696  C289.391,385.913,281.913,378.435,272.696,378.435z"
        />
        <path
          fill="#FFFFFF"
          d="M372.87,345.043H139.13c-9.217,0-16.696-7.479-16.696-16.696c0-9.217,7.479-16.696,16.696-16.696  H372.87c9.217,0,16.696,7.479,16.696,16.696C389.565,337.565,382.087,345.043,372.87,345.043z"
        />
        <path
          fill="#E6F3FF"
          d="M372.87,311.652H256v33.391h116.87c9.217,0,16.696-7.479,16.696-16.696  C389.565,319.131,382.087,311.652,372.87,311.652z"
        />
        <path
          fill="#FFFFFF"
          d="M372.87,278.261H139.13c-9.217,0-16.696-7.479-16.696-16.696c0-9.217,7.479-16.696,16.696-16.696  H372.87c9.217,0,16.696,7.479,16.696,16.696C389.565,270.782,382.087,278.261,372.87,278.261z"
        />
        <path
          fill="#E6F3FF"
          d="M372.87,244.87H256v33.391h116.87c9.217,0,16.696-7.479,16.696-16.696  C389.565,252.348,382.087,244.87,372.87,244.87z"
        />
      </svg>
    </SvgIcon>
  );
};
