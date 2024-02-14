import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Suggestions } from "../../api/fetching.apis";

type propTypes = {
  options: Suggestions[];
  inputValue: string;
  onInputChange: (event: React.SyntheticEvent, value: string) => void;
  onSelect: (event: React.ReactEventHandler<HTMLDivElement>) => void;
  getOptionLabel: (option: Suggestions | string) => string;
};
export default function SearchBox({
  options,
  inputValue,
  onSelect,
  onInputChange,
  getOptionLabel,
}: propTypes) {
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      onSelect={onSelect}
      inputValue={inputValue}
      onInputChange={onInputChange}
      options={options}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}
