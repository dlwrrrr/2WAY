// DatePickerModal.js
import React from 'react';
import { Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePickerModal = ({ isVisible, handleConfirm, hideDatePicker }) => {
  return (
    <>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="ko"
      />
    </>
  );
};

export default DatePickerModal;
