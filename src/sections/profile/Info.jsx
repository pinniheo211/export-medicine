import { Avatar, TextField, Autocomplete } from '@mui/material';

export default function Info() {
  const Country = [
    { label: 'VietNam' },
    { label: 'France' },
    { label: 'China' },
    { label: 'America' },
    { label: 'Australia' },
  ];
  return (
    <div className="w-full mt-10 text-center">
      <h1 className="text-2xl font-semibold">Description</h1>

      <div className="w-full bg-white rounded-2xl mt-10 px-10 py-5 shadow ">
        <div className="flex gap-3 items-center border-b-[1px] py-5">
          <Avatar alt="Remy Sharp" src="" />
          <p>Tran Chi Cuong</p>
        </div>
        <div className=" grid grid-cols-2 gap-5 my-5 pt-5">
          <TextField name="storename" label="Tên tổ chức" />
          <TextField name="fullname" label="Họ và tên" />
          <TextField name="username" label="Tên đăng nhập" />
          <TextField name="phone" label="Số điện thoại" />
        </div>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Country}
          renderInput={(params) => <TextField fullWidth {...params} label="Quốc gia" />}
        />
        <div className="w-full text-left mt-10">
          <button type="submit" className="px-3  py-1.5 rounded-lg bg-blue-500 text-white">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
}
