import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in the State)", () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kama");
  });

  test(`after creation <span> should be displayed`, () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test(`after creation <input> should not be displayed`, () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const root = component.root;

    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });

  test(`after creation <span> should contain correct status`, () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("it-kama");
  });

  test(`input should be displayed in edit mode instead of span`, () => {
    const component = create(<ProfileStatus status="it-kama" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("it-kama");
  });

  test(`callback should be called`, () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="it-kama" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
