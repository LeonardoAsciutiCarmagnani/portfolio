import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import { useTheme } from "../Contexts/darkthemecontext";

export default function Header(){

    const { theme, setTheme } = useTheme()

    return(
                <div className="flex items-center justify-around bg-transparent dark:bg-transparent h-[4rem] shadow-md shadow-orange-500 dark:orange-500 b-[0.1rem]">
                        <div>
                           <h1 className="text-orange-500 text-xl font-semibold font-vast">Leonardo Asciuti Carmagnani</h1>
                           <h2 className='font-oswald text-slate-900 dark:text-slate-100 text-xl'>Fullstack developer</h2>
                        </div>
                    <div>
                    <FormGroup>
                            <div >
                                <FormControlLabel
                                className='flex items-center justify-around p-[0.2rem]'
                                    control={
                                        <Switch
                                            color='warning'
                                            checked={theme === 'dark'}
                                            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        />
                                    }
                                    label={ theme === 'dark' ? <NightsStaySharpIcon fontSize='large' color='warning' /> : <LightModeIcon fontSize='large' color='action' />}
                                />
                            </div>
                        </FormGroup>
                    </div>
                </div>
    )
}