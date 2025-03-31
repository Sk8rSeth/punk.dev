export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const BlogPartsFragmentDoc = gql`
    fragment BlogParts on Blog {
  __typename
  title
  date
  excerpt
  featuredImage
  tags
  body
}
    `;
export const ProductPartsFragmentDoc = gql`
    fragment ProductParts on Product {
  __typename
  title
  price
  category
  featuredImage
  shopifyLink
  body
}
    `;
export const BranchPartsFragmentDoc = gql`
    fragment BranchParts on Branch {
  __typename
  title
  featuredImage
  body
}
    `;
export const SiteConfigPartsFragmentDoc = gql`
    fragment SiteConfigParts on SiteConfig {
  __typename
  mailchimp {
    __typename
    signupUrl
  }
  shopify {
    __typename
    storeUrl
  }
}
    `;
export const BlogDocument = gql`
    query blog($relativePath: String!) {
  blog(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlogParts
  }
}
    ${BlogPartsFragmentDoc}`;
export const BlogConnectionDocument = gql`
    query blogConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlogFilter) {
  blogConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlogParts
      }
    }
  }
}
    ${BlogPartsFragmentDoc}`;
export const ProductDocument = gql`
    query product($relativePath: String!) {
  product(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProductParts
  }
}
    ${ProductPartsFragmentDoc}`;
export const ProductConnectionDocument = gql`
    query productConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProductFilter) {
  productConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProductParts
      }
    }
  }
}
    ${ProductPartsFragmentDoc}`;
export const BranchDocument = gql`
    query branch($relativePath: String!) {
  branch(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BranchParts
  }
}
    ${BranchPartsFragmentDoc}`;
export const BranchConnectionDocument = gql`
    query branchConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BranchFilter) {
  branchConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BranchParts
      }
    }
  }
}
    ${BranchPartsFragmentDoc}`;
export const SiteConfigDocument = gql`
    query siteConfig($relativePath: String!) {
  siteConfig(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteConfigParts
  }
}
    ${SiteConfigPartsFragmentDoc}`;
export const SiteConfigConnectionDocument = gql`
    query siteConfigConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteConfigFilter) {
  siteConfigConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteConfigParts
      }
    }
  }
}
    ${SiteConfigPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    blog(variables, options) {
      return requester(BlogDocument, variables, options);
    },
    blogConnection(variables, options) {
      return requester(BlogConnectionDocument, variables, options);
    },
    product(variables, options) {
      return requester(ProductDocument, variables, options);
    },
    productConnection(variables, options) {
      return requester(ProductConnectionDocument, variables, options);
    },
    branch(variables, options) {
      return requester(BranchDocument, variables, options);
    },
    branchConnection(variables, options) {
      return requester(BranchConnectionDocument, variables, options);
    },
    siteConfig(variables, options) {
      return requester(SiteConfigDocument, variables, options);
    },
    siteConfigConnection(variables, options) {
      return requester(SiteConfigConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
