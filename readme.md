the coder's companion

what we need?

problems page
- 
compiler, solving page
- 

home page
test cases

token { token: '6fe70257-e02c-4462-a938-2eb4f8b42a2c' }
response.data  {
  source_code: 'Ly8gc29tZSBjb21tZW50DQojaW5jbHVkZTxiaXRzL3N0ZGMrKy5oPg0KaW50\n' +
    'IG1haW4oKXsNCiAgICBzdGQ6OmNvdXQ8PCJIYWkgZmlyc3QgY29kZSI7DQp9\n',
  language_id: 52,
  stdin: '',
  expected_output: null,
  stdout: 'SGFpIGZpcnN0IGNvZGU=\n',
  status_id: 3,
  created_at: '2024-04-18T15:47:30.921Z',
  finished_at: '2024-04-18T15:47:31.736Z',
  time: '0.001',
  memory: 868,
  stderr: null,
  token: '6fe70257-e02c-4462-a938-2eb4f8b42a2c',
  number_of_runs: 1,
  cpu_time_limit: '5.0',
  cpu_extra_time: '1.0',
  wall_time_limit: '10.0',
  memory_limit: 128000,
  stack_limit: 64000,
  max_processes_and_or_threads: 60,
  enable_per_process_and_thread_time_limit: false,
  enable_per_process_and_thread_memory_limit: false,
  max_file_size: 1024,
  compile_output: null,
  exit_code: 0,
  exit_signal: null,
  message: null,
  wall_time: '0.001',
  compiler_options: null,
  command_line_arguments: null,
  redirect_stderr_to_stdout: false,
  callback_url: null,
  additional_files: null,
  enable_network: false,
  status: { id: 3, description: 'Accepted' },
  language: { id: 52, name: 'C++ (GCC 7.4.0)' }
}

response.data  {
  source_code: 'DQojaW5jbHVkZTxiaXRzL3N0ZGMrKy5oPg0KaW50IG1haW4oKXsNCiAgICBj\n' +
    'b3V0PDwiaXRzIHdvcmtpbmcgcHJpeWEgaXRzIHdvcmtpbmciDQp9\n',
  language_id: 52,
  stdin: '',
  expected_output: null,
  stdout: null,
  status_id: 6,
  created_at: '2024-04-18T15:48:14.856Z',
  finished_at: '2024-04-18T15:48:15.645Z',
  time: null,
  memory: null,
  stderr: null,
  token: '9f3c8023-0892-4145-bffd-a786a720964b',
  number_of_runs: 1,
  cpu_time_limit: '5.0',
  cpu_extra_time: '1.0',
  wall_time_limit: '10.0',
  memory_limit: 128000,
  stack_limit: 64000,
  max_processes_and_or_threads: 60,
  enable_per_process_and_thread_time_limit: false,
  enable_per_process_and_thread_memory_limit: false,
  max_file_size: 1024,
  compile_output: 'bWFpbi5jcHA6IEluIGZ1bmN0aW9uIOKAmGludCBtYWluKCnigJk6Cm1haW4u\n' +
    'Y3BwOjQ6NTogZXJyb3I6IOKAmGNvdXTigJkgd2FzIG5vdCBkZWNsYXJlZCBp\n' +
    'biB0aGlzIHNjb3BlCiAgICAgY291dDw8Iml0cyB3b3JraW5nIHByaXlhIGl0\n' +
    'cyB3b3JraW5nIg0KICAgICBefn5+Cm1haW4uY3BwOjQ6NTogbm90ZTogc3Vn\n' +
    'Z2VzdGVkIGFsdGVybmF0aXZlOgpJbiBmaWxlIGluY2x1ZGVkIGZyb20gL3Vz\n' +
    'ci9sb2NhbC9nY2MtNy40LjAvaW5jbHVkZS9jKysvNy40LjAveDg2XzY0LXBj\n' +
    'LWxpbnV4LWdudS9iaXRzL3N0ZGMrKy5oOjc1OjAsCiAgICAgICAgICAgICAg\n' +
    'ICAgZnJvbSBtYWluLmNwcDoyOgovdXNyL2xvY2FsL2djYy03LjQuMC9pbmNs\n' +
    'dWRlL2MrKy83LjQuMC9pb3N0cmVhbTo2MToxODogbm90ZTogICDigJhzdGQ6\n' +
    'OmNvdXTigJkKICAgZXh0ZXJuIG9zdHJlYW0gY291dDsgIC8vLyBMaW5rZWQg\n' +
    'dG8gc3RhbmRhcmQgb3V0cHV0CiAgICAgICAgICAgICAgICAgIF5+fn4K\n',
  exit_code: null,
  exit_signal: null,
  message: null,
  wall_time: null,
  compiler_options: null,
  command_line_arguments: null,
  redirect_stderr_to_stdout: false,
  callback_url: null,
  additional_files: null,
  enable_network: false,
  status: { id: 6, description: 'Compilation Error' },
  language: { id: 52, name: 'C++ (GCC 7.4.0)' }
}

const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  