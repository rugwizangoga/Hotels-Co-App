import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FieldValues } from "react-hook-form";
import bcrypt from 'bcryptjs';

const UserURL = 'https://65338eb8d80bd20280f69405.mockapi.io/api/users';

export const registerUser = async (data: FieldValues) => {
    const { password, ...restData } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { ...restData, password: hashedPassword };
    return axios.post(UserURL, userData);
  };
  

export const useRegisterUser = () => {
  return useMutation(
    {
        mutationFn: registerUser
    }
  );
}

export const loginUser = () => {
  return axios.get(UserURL).then((res)=>res.data);
};

export const userQuery = ()=>{
  return useQuery({
  queryKey: ['users'],
  queryFn: loginUser,
})
}
