import {  Query } from 'mongoose';

interface QueryParams {
  search?: string;
  filter?: string;
  sortBy?: string;
}

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: QueryParams;

  constructor(modelQuery: Query<T[], T>, query: QueryParams) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search() {
    const searchQuery = this.query.search;
    if (searchQuery) {
      this.modelQuery = this.modelQuery.find({
        $or: [
          { title: { $regex: searchQuery, $options: 'i' } },
          { content: { $regex: searchQuery, $options: 'i' } },
        ],
      });
    }
    return this;
  }

  filter() {
    const authorId = this.query.filter;
    if (authorId) {
      this.modelQuery = this.modelQuery.find({ author: authorId });
    }
    return this;
  }

  sort() {
    const sort = this.query.sortBy?.split(',').join(' ') || '-createdAt';
    this.modelQuery = this.modelQuery.sort(sort);
    return this;
  }
}

export default QueryBuilder;
