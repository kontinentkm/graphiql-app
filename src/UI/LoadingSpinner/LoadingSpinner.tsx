import { SPINNER_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

export default function LoaderSpinner() {
  return (
    <>
      <div
        data-testid={SPINNER_TEST_ID}
        className="flex items-center justify-center"
      >
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    </>
  );
}
