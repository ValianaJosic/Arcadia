class EventsController < ApplicationController

  def index
  end

  def create
    d = params[date]
    t = params[time]
    Event.create(
        user:           current_user,
        activity_date:  DateTime.new(d.year, d.month, d.day, t.hour, t.min, t.sec, t.zone),
        notes:          params[notes],
        eventable_type: params[contact],
        eventable_id:   params[name]
      )
  end

# <label htmlFor="type">Type</label>
# <select  onChange={this.handleChange}>
#   {this.optionsArray(this.state.eventTypeOptions).map(option => option)}
# </select>

# <label htmlFor="name">Name</label>
#   <select>
#     {this.state.eventTypeData.map(data => <option key={data.id} value={data.id}>{data.name}</option> )}
#   </select>

# <label htmlFor="date">Date</label>
# <input id="date" type="date" />

# <label htmlFor="time">Time</label>
# <input id="time" type="time" />

# <label htmlFor="notes">Notes</label>
# <input id="notes" type="text" />

end
