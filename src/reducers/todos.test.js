import todos from './todos'

describe('todo reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ],
        {
          type: 'ADD_TODO',
          text: 'Use Redux',
          id: 1
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: 'TOGGLE_TODO',
          id: 1
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
})
