import { FC, memo } from "react";
import { Spin } from "antd";
import { LoadingProps } from "./loading.props";

const Loading: FC<LoadingProps> = ({ ...props }) => {
  return (
    <div className="mx-auto">
      <Spin {...props} />
    </div>
  );
};

export default memo(Loading);
