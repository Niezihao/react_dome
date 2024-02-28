/*
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2024-02-18 09:12:20
 * @LastEditors: niezihao
 * @LastEditTime: 2024-02-18 10:00:45
 */

import React, { useState } from 'react';
import Modal from './modal'


function ChildComponent({ datas }) { // 使用解构赋值从props中获取data
    const [visabled, useVisabled] = useState(false)
    const OpenModal = () => {
        useVisabled(true);
      };
    const HandleCancel = () => {
        useVisabled(false);
      };
    return (
        <div>
            这是从父组件接收的数据：{datas}
            <button onClick={OpenModal}>弹框</button>
            <Modal isVisabled={visabled} cancel={HandleCancel}></Modal>
        </div>

    );
}

export default ChildComponent;