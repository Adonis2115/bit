/** @flow */
import { loadConsumer } from '../../../consumer';
import InlineId from '../../../consumer/bit-inline-id';
import InvalidIdOnCommit from './exceptions/invalid-id-on-commit';

export default function commitAction({ id, message, force, verbose }:
{ id: string, message: string, force: ?bool, verbose?: bool }) {
  try {
    const componentId = InlineId.parse(id);
    return loadConsumer()
    .then(consumer => consumer.commit(componentId, message, force, verbose));
  } catch (err) {
    return Promise.reject(new InvalidIdOnCommit(id));
  }
}
