import { SvgIcon } from "@mui/material";
import { CustomSvgIconProps } from "@/ui/shared/types/icons";

export const GoogleDriveSlidesIcon = (props: CustomSvgIconProps) => {
  return (
    <SvgIcon {...props} inheritViewBox>
      {/* From https://www.svgrepo.com/ */}
      <svg height="800px" width="800px" viewBox="0 0 512 512">
        <path
          fill="#FFD500"
          d="M439.652,512H72.348c-9.217,0-16.696-7.479-16.696-16.696V16.696C55.652,7.479,63.131,0,72.348,0  h233.739c4.424,0,8.674,1.761,11.804,4.892l133.565,133.565c3.131,3.13,4.892,7.379,4.892,11.804v345.043  C456.348,504.521,448.869,512,439.652,512z"
        />
        <path
          fill="#FFAA00"
          d="M317.891,4.892C314.761,1.761,310.511,0,306.087,0H256v512h183.652  c9.217,0,16.696-7.479,16.696-16.696V150.261c0-4.424-1.761-8.674-4.892-11.804L317.891,4.892z"
        />
        <path
          fill="#FFD500"
          d="M451.459,138.459L317.891,4.892C314.76,1.76,310.511,0,306.082,0h-16.691l0.001,150.261  c0,9.22,7.475,16.696,16.696,16.696h150.26v-16.696C456.348,145.834,454.589,141.589,451.459,138.459z"
        />
        <path
          fill="#FFFFFF"
          d="M372.87,445.217H139.13c-9.217,0-16.696-7.479-16.696-16.696V228.174  c0-9.217,7.479-16.696,16.696-16.696H372.87c9.217,0,16.696,7.479,16.696,16.696v200.348  C389.565,437.739,382.087,445.217,372.87,445.217z M155.826,411.826h200.348V244.87H155.826V411.826z"
        />
        <path
          fill="#E6F3FF"
          d="M372.87,211.478H256v33.391h100.174v166.957H256v33.391h116.87c9.217,0,16.696-7.479,16.696-16.696  V228.174C389.565,218.957,382.087,211.478,372.87,211.478z"
        />
      </svg>
    </SvgIcon>
  );
};